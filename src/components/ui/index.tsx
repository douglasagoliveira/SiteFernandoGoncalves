import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export function Button({ children, to, href, variant = 'primary', className = '', target, rel, type = 'button', onClick }: ButtonProps) {
  const baseClass = variant === 'primary' ? 'wf-btn-primary' : 'wf-btn-secondary';
  const classes = `${baseClass} ${className}`.trim();

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={classes} target={target} rel={rel}>{children}</a>;
  }

  return <button type={type} className={classes} onClick={onClick}>{children}</button>;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function Card({ children, className = '', centered = false }: CardProps) {
  const classes = `wf-card ${centered ? 'wf-card-centered' : ''} ${className}`.trim();
  return <div className={classes}>{children}</div>;
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ children, className = '', dark = false }: SectionProps) {
  const classes = `wf-section ${dark ? 'wf-section-dark' : ''} ${className}`.trim();
  return <section className={classes}>{children}</section>;
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
  maxWidth?: string;
}

export function Container({ children, className = '', centered = false, maxWidth }: ContainerProps) {
  const style = maxWidth ? { maxWidth, margin: '0 auto' } : undefined;
  const classes = `${centered ? 'wf-section-center' : ''} ${className}`.trim();
  return <div className={classes} style={style}>{children}</div>;
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ label, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={centered ? 'wf-section-center' : ''}>
      {label && <p className="wf-section-label">{label}</p>}
      <h2 className="wf-section-title">{title}</h2>
      {subtitle && <p className="wf-section-subtitle">{subtitle}</p>}
    </div>
  );
}

interface ImagePlaceholderProps {
  label?: string;
  height?: string;
  className?: string;
}

export function ImagePlaceholder({ label = 'IMAGEM', height = '350px', className = '' }: ImagePlaceholderProps) {
  const classes = `wf-card-image ${className}`.trim();
  return (
    <div className={classes} style={{ height }}>
      <span className="wf-annotation">{label}</span>
    </div>
  );
}
