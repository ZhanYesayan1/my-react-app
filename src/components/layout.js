import Topbar from "./topbar";

export default function Layout({ children, searchQuery, setSearchQuery }) {
    return (
        <div>
            <Topbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {children}
        </div>
    );
}