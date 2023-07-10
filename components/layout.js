import Footer from "./footer";
import Header from "./header";

export default function Layout({children}) {
    return (
        <div>
        <div className="min-h-screen bg-primary">
        <Header />
        <div>
            {children}
        </div>
        </div>
        <Footer />
        </div>
    )
}