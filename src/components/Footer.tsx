const Footer = async () => {
    return (
        <footer className="bg-gray-100 text-gray-800 w-full">
            <div className="max-w-7xl mx-auto py-10 px-6 sm:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="text-slate-500 hover:text-yellow-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.37 8.48 8.48 0 0 1-2.7 1.03A4.24 4.24 0 0 0 16 4a4.28 4.28 0 0 0-4.2 5.27A12.06 12.06 0 0 1 3 5.1a4.27 4.27 0 0 0-.58 2.14 4.27 4.27 0 0 0 1.9 3.57 4.21 4.21 0 0 1-1.93-.53v.05a4.28 4.28 0 0 0 3.42 4.18 4.3 4.3 0 0 1-1.92.07 4.27 4.27 0 0 0 4 3A8.5 8.5 0 0 1 2 19.54a12 12 0 0 0 6.29 1.83c7.55 0 11.67-6.26 11.67-11.67v-.53a8.34 8.34 0 0 0 2.05-2.13z"/>
                                </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-500 hover:text-yellow-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.68 8.82 8.42 9.73v-6.87H8.42v-2.85h2v-2.17c0-2 1.2-3.11 3-3.11.87 0 1.75.16 1.75.16v1.93H14.5c-1.03 0-1.35.63-1.35 1.27v1.42h2.28l-.36 2.85h-1.92V22C18.32 21.1 22 17.12 22 12c0-5.52-4.48-10-10-10z"/>
                                </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-500 hover:text-yellow-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.16c-5.5 0-10 4.48-10 10 0 4.18 2.56 7.73 6.11 9.32-.08-.8-.15-2.04.03-2.92.16-.78 1.04-4.96 1.04-4.96s-.26-.53-.26-1.31c0-1.23.71-2.16 1.6-2.16.76 0 1.14.57 1.14 1.25 0 .76-.49 1.91-.74 2.97-.21.9.45 1.63 1.34 1.63 1.6 0 2.83-1.7 2.83-4.13 0-2.16-1.56-3.67-3.79-3.67-2.58 0-4.1 1.94-4.1 3.94 0 .78.3 1.62.67 2.08.07.08.08.15.06.23-.07.26-.23.83-.26.95-.04.17-.13.2-.31.12-1.22-.57-1.99-2.36-1.99-3.8 0-3.09 2.25-5.93 6.5-5.93 3.41 0 6.06 2.43 6.06 5.68 0 3.37-2.13 6.09-5.08 6.09-1.01 0-1.96-.53-2.28-1.15 0 0-.49 1.94-.6 2.37-.21.82-.78 1.84-1.18 2.47.9.28 1.84.44 2.83.44 5.5 0 10-4.48 10-10s-4.5-9.84-10-9.84z"/>
                                </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Nos partenaires</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-500 hover:text-yellow-600 underline">Apiculteurs Associés</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-yellow-600 underline">Miel d&apos;Or Coopérative</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-yellow-600 underline">Les Ruches du Monde</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-yellow-600 underline">Nature & Abeilles</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
                        <ul className="space-y-2">
                        <li><a href="#" className="text-slate-500 hover:text-yellow-600 underline">Mentions légales</a></li>
                        <li><a href="#" className="text-slate-500 hover:text-yellow-600 underline">Politique de confidentialité</a></li>
                        <li><a href="#" className="text-slate-500 hover:text-yellow-600 underline">Plan du site</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-4">
                <p className="text-center text-sm text-gray-600">&copy; 2025 Hun&apos; - Tous droits réservés.</p>
            </div>
        </footer>
    );
}
 
export default Footer;