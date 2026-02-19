const Footer = () => (
  <footer className="bg-muted text-center py-3 text-[0.7rem] text-muted-foreground border-t border-border mt-auto">
    <p className="transition-all duration-200 hover:scale-105 hover:text-foreground cursor-default">
      {/* <p className="text-sm text-muted-foreground font-mono"> */}
            © {new Date().getFullYear()}  Shourya Parashar. All rights reserved.
    </p>
  </footer>
);

export default Footer;