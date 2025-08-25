import { Link, useLocation } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* 왼쪽: 로고 + 메뉴 */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-bold hover:opacity-80">
            Eat Code Yam
          </Link>
          <nav className="flex space-x-4 relative">
            {/* TODO */}
          </nav>
        </div>

        <nav className="flex items-center space-x-6 text-sm">
          <Link to="/shoppingcart" className="hover:underline">
            장바구니
          </Link>
          <Link to="/login" className="hover:underline">
            로그인
          </Link>
        </nav>
      </div>
    </header>
  );
}