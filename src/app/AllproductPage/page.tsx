import AllproductIndex from "../AllproductComponentpage/allproductIndex"

export default function page() {
    return (
        <main className="relative min-h-screen flex-grow" style={{ minHeight: "-webkit-fill-available", WebkitOverflowScrolling: "touch" }}>
            <AllproductIndex/>
        </main>
    )
}
