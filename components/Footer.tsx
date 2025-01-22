const Footer = () => {
  return (
    <footer className="w-full p-8 flex justify-center text-center text-xs">
      <div className="flex flex-col gap-4 items-center">
        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/melotik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <i className="fab fa-linkedin text-xl" aria-label="LinkedIn" />
          </a>
          <a
            href="https://github.com/melotik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <i className="fab fa-github text-xl" aria-label="GitHub" />
          </a>
          <a
            href="https://x.com/dylanmelotik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <i className="fab fa-x-twitter text-xl" aria-label="X (Twitter)" />
          </a>
          <a
            href="https://dylanmelotik.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <i className="fab fa-medium text-xl" aria-label="Medium" />
          </a>
        </div>
        
        {/* Existing footer content */}
        <p className="text-muted-foreground">© {new Date().getFullYear()} Dylan Melotik. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 