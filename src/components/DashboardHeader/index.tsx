// components/DashboardHeader.tsx
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Container,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function DashboardHeader() {
  const { accessToken, setAccessToken, setRefreshToken } = useAuthStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  const router = useRouter();

  const handleLogout = () => {
    setAccessToken("");
    setRefreshToken("");
    signOut();
  };

  useEffect(() => {
    if (!accessToken) {
      router.push("/");
    }
  }, [accessToken, router]);

  return (
    <header className="dashboard-header bg-white shadow-sm">
      <Container fluid className="px-md-4">
        <div className="d-flex justify-content-between align-items-center py-3">
          {/* Logo/Brand */}
          <Link
            href="/dashboard"
            className="navbar-brand d-flex align-items-center"
          >
            <div className="logo-icon bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center me-2">
              <i className="bi bi-calendar-check text-white"></i>
            </div>
            <span className="fw-bold fs-4 text-gradient">Pro-Meets</span>
          </Link>

          {/* Navigation */}
          <Nav className="align-items-center">
            {/* New Meeting Button */}
            <NavItem className="mx-2">
              <Link
                href="/dashboard/new-meeting"
                className="btn btn-primary rounded-pill px-3"
              >
                <i className="bi bi-plus-lg me-1"></i> New Meeting
              </Link>
            </NavItem>

            {/* User Dropdown */}
            <Dropdown isOpen={dropdownOpen} toggle={toggle} nav inNavbar>
              <DropdownToggle nav caret className="d-flex align-items-center">
                <div className="avatar bg-light text-dark rounded-circle me-2">
                  <i className="bi bi-person-fill"></i>
                </div>
                <span className="d-none d-lg-inline">John Doe</span>
              </DropdownToggle>

              <DropdownMenu end>
                <DropdownItem tag={Link} href="/dashboard/profile">
                  Profile
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </header>
  );
}
