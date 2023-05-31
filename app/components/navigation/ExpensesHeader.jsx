
import { Link, NavLink } from '@remix-run/react';
import Logo from '../util/Logo';

function ExpensesHeader() {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/expenses">Manage Expenses</NavLink>
          </li>
          <li>
            <NavLink to="/expenses/analysis">Analyse Expenses</NavLink>
          </li>          
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          <li>
            <Link to="/auth" className="cta">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ExpensesHeader;
