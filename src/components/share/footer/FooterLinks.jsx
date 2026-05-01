const FooterLinks = ({ title, links }) => (
  <div>
    <h4 className="text-white font-bold mb-6">{title}</h4>
    <ul className="space-y-4">
      {links.map((link, i) => (
        <li key={i}>
          <a href="#" className="hover:text-purple-400 transition-colors flex items-center gap-2">
            <span className="text-purple-500">▶</span> {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinks;