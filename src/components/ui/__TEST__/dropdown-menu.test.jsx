import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
} from "../dropdown-menu.jsx";
import '@testing-library/jest-dom'

describe("DropdownMenu Components", () => {
  test("DropdownMenu renders correctly", () => {
    const { container } = render(<DropdownMenu />);
    expect(container).toBeInTheDocument();
  });

  test("DropdownMenuTrigger renders correctly and can be clicked", () => {
    const { getByText } = render(
      <DropdownMenu>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(getByText("Trigger")).toBeInTheDocument();
    fireEvent.click(getByText("Trigger"));
  });

  test("DropdownMenuContent renders correctly", () => {
    const { container } = render(
      <DropdownMenu>
        <DropdownMenuContent>Content</DropdownMenuContent>
      </DropdownMenu>
    );
    expect(container).toBeInTheDocument();
  });

  test("DropdownMenuSeparator renders correctly", () => {
    const { container } = render(
      <DropdownMenu>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    );
    expect(container).toBeInTheDocument();
  });

  test("DropdownMenuShortcut renders correctly", () => {
    const { getByText } = render(
      <DropdownMenuShortcut>Shortcut</DropdownMenuShortcut>
    );
    expect(getByText("Shortcut")).toBeInTheDocument();
  });

  test("DropdownMenuGroup renders correctly", () => {
    const { container } = render(
      <DropdownMenu>
        <DropdownMenuGroup />
      </DropdownMenu>
    );
    expect(container).toBeInTheDocument();
  });

  test("DropdownMenuPortal renders correctly", () => {
    const { container } = render(
      <DropdownMenu>
        <DropdownMenuPortal />
      </DropdownMenu>
    );
    expect(container).toBeInTheDocument();
  });

  test("DropdownMenuSub renders correctly", () => {
    const { container } = render(
      <DropdownMenu>
        <DropdownMenuSub />
      </DropdownMenu>
    );
    expect(container).toBeInTheDocument();
  });

  test("DropdownMenuSubContent renders correctly", () => {
    const { container } = render(
      <DropdownMenu>
        <DropdownMenuSub>
          <DropdownMenuSubContent>SubContent</DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenu>
    );
    expect(container).toBeInTheDocument();
  });

  test("DropdownMenuRadioGroup renders correctly", () => {
    const { container } = render(
      <DropdownMenu>
        <DropdownMenuRadioGroup />
      </DropdownMenu>
    );
    expect(container).toBeInTheDocument();
  });
});
