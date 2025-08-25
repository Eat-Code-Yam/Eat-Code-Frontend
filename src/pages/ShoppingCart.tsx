export default function ShoppingCart() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          🍽️ Eat Code Yam
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          장바구니 화면
        </p>
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 transform hover:scale-105">
          시작하기
        </button>
        <div className="mt-6 flex justify-center space-x-2">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}