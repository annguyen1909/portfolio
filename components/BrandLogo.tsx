type BrandLogoProps = {
  className?: string;
  showName?: boolean;
};

const BrandLogo = ({ className = '', showName = true }: BrandLogoProps) => (
  <span className={`brand-logo ${className}`.trim()}>
    <img
      src="/brand/an-monogram.png"
      alt=""
      width="512"
      height="389"
      className="brand-logo__mark"
    />
    {showName && <span className="brand-logo__name">AN NGUYEN</span>}
  </span>
);

export default BrandLogo;
