import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-5 backdrop-blur-3xl mt-8 px-6 md:px-20 lg:px-32">
            {/* <div>
                <h1 className="text-xl font-bold">Music<span className="opacity-50">hub</span></h1>
            </div> */}
            <p className="text-sm text-muted-foreground">Built for music purpose. Made by <a className="underline text-primary hover:text-primary" href="https://discord.gg/cafe-bliss">Arima</a>.</p>
            <div className="flex gap-3 items-center mt-3">
                <Link target="_blank" className="text-sm opacity-80 font-light underline hover:opacity-100" href="https://blinime.vercel.app/">anime site</Link>
                <Link target="_blank" className="text-sm opacity-80 font-light underline hover:opacity-100" href="https://blisstunes.netlify.app/">radio site</Link>
                <Link target="_blank" className="text-sm opacity-80 font-light underline hover:opacity-100" href="https://instagram.com/mr.ethion">Instagram</Link>
            </div>
        </footer>
    )
}
