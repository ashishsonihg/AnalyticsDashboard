import { createBrowserHistory } from 'history'
import setQueryParams from 'common/utils/setQueryParams'
import { isExternalUrl as isExternalUrlUtils } from 'common/utils/isExternalUrl'

let history
const isExternalUrl = (url, getState) => {
  let isWhitelabel = false
  if (getState) {
    const {
      seo: { linkParams = {} } = {},
      routeParams: { path: currUrl = '' } = {}
    } = getState() || {}
    if (linkParams.target) {
      isWhitelabel = true
    }
    return isExternalUrlUtils(url, isWhitelabel, currUrl)
  }
  return isExternalUrlUtils(url, isWhitelabel)
}

export default getState => {
  const state = getState && getState()
  let { shell: { useragent: { vernac } = {} } = {} } = state || {}
  history =
    history ||
    createBrowserHistory({
      basename: vernac // will be undefined for non vernacular requests
    })

  const createUrlWithBasename = url => {
    const regex = new RegExp(
      '.*?housing\\.com' + (vernac ? `(\\${vernac})?` : '')
    )

    const { isExternal, isPhoenixRoute, isEdgeRoute } = isExternalUrl(
      url,
      getState
    )
    const relativeUrl =
      isPhoenixRoute || (!isExternal && isEdgeRoute)
        ? url.replace(regex, '')
        : ''
    const href = isExternal
      ? isPhoenixRoute
        ? history.createHref({ pathname: relativeUrl })
        : url
      : relativeUrl
    return { isExternal, href }
  }

  return {
    ...history,
    goBack: history.goBack,
    push: (url, ...args) => {
      const { routeParams: { path = '', query = {} } = {} } =
        (getState && getState()) || {}
      if (isExternalUrl(path, getState).isExternal) {
        url = setQueryParams(url, query) || url
      }
      const { isExternal, href } = createUrlWithBasename(url)
      isExternal ? (window.location.href = href) : history.push(href, ...args)
    },
    replace: (url, ...args) => {
      const { isExternal, href } = createUrlWithBasename(url)
      isExternal
        ? (window.location.href = href)
        : history.replace(href, ...args)
    }
  }
}
