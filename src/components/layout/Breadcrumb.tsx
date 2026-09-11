import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  currentPage: string;
}

export default function Breadcrumb({ currentPage }: BreadcrumbProps) {
  return (
    <div className="wf-breadcrumb">
      <Link to="/">Início</Link>
      <span>/</span>
      {currentPage}
    </div>
  );
}
