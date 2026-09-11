function Footer() {
    return (
        <footer className="bg-white text-gray-600 border-t border-gray-100 pt-16 pb-8 px-4 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 pb-12">

                {/* Brand Column (Span 2) */}
                <div className="md:col-span-2 flex flex-col items-start space-y-4">
                    <div className="flex items-center space-x-2">
                        <img src="/src/assets/logo-text.png" alt="Dev Stack Logo" className="h-8 w-auto object-contain" />
                    </div>
                    <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>
                    <div className="flex items-center space-x-4 text-sm font-medium text-gray-700 pt-2">
                        <a href="#" className="hover:text-pink-600 transition-colors">GitHub</a>
                        <a href="#" className="hover:text-pink-600 transition-colors">Twitter</a>
                        <a href="#" className="hover:text-pink-600 transition-colors">LinkedIn</a>
                    </div>
                </div>

                {/* Product Column */}
                <div className="flex flex-col space-y-3">
                    <h4 className="text-xs font-bold text-black uppercase tracking-wider">Product</h4>
                    <ul className="space-y-2.5 text-sm">
                        <li><a href="#" className="hover:text-pink-600 transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-pink-600 transition-colors">Technologies</a></li>
                        <li><a href="#" className="hover:text-pink-600 transition-colors">Projects</a></li>
                    </ul>
                </div>

                {/* Company Column */}
                <div className="flex flex-col space-y-3">
                    <h4 className="text-xs font-bold text-black uppercase tracking-wider">Company</h4>
                    <ul className="space-y-2.5 text-sm">
                        <li><a href="#" className="hover:text-pink-600 transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-pink-600 transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-pink-600 transition-colors">Careers</a></li>
                    </ul>
                </div>

                {/* Legal Column */}
                <div className="flex flex-col space-y-3">
                    <h4 className="text-xs font-bold text-black uppercase tracking-wider">Legal</h4>
                    <ul className="space-y-2.5 text-sm">
                        <li><a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-pink-600 transition-colors">Terms of Service</a></li>
                    </ul>
                </div>

            </div>

            {/* Bottom Copyright Bar */}
            <div className="max-w-7xl mx-auto border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <div className="flex items-center space-x-6 mt-4 sm:mt-0">
                    <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;