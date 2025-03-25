export default function Footer() {
  return (
    <>
      <footer class="sticky-bottom bg-dark text-white text-center py-3 mt-3">
        <div className="container">
          <p className="mb-0">
            © Welcome to Company of Ranjan 2025. All rights reserved.
          </p>
          <ul className="list-inline mt-2">
            <li className="list-inline-item">
              <a href="#" className="text-white text-decoration-none">
                Privacy Policy
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-white text-decoration-none">
                Terms of Service
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-white text-decoration-none">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
