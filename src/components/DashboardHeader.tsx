// components/DashboardHeader.tsx
import {
  Container,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useState } from "react";
import Link from "next/link";

export default function DashboardHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="dashboard-header bg-white shadow-sm">
      <Container fluid className="px-md-4">
        <div className="d-flex justify-content-between align-items-center py-3">
          <Link
            href="/dashboard"
            className="navbar-brand d-flex align-items-center"
          >
            <div className="logo-icon bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center me-2">
              <i className="bi bi-calendar-check text-white"></i>
            </div>
            <span className="fw-bold fs-4 text-gradient">Pro-Meets</span>
          </Link>

          <Nav className="align-items-center">
            <NavItem className="mx-2">
              <Link
                href="/new-meeting"
                className="btn btn-primary rounded-pill px-3"
              >
                <i className="bi bi-plus-lg me-1"></i> New Meeting
              </Link>
            </NavItem>

            <Dropdown isOpen={dropdownOpen} toggle={toggle} nav inNavbar>
              <DropdownToggle nav caret className="d-flex align-items-center">
                <div className="avatar bg-light text-dark rounded-circle me-2">
                  <i className="bi bi-person-fill"></i>
                </div>
                <span className="d-none d-lg-inline">John Doe</span>
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem header>Account</DropdownItem>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </header>
  );
}
