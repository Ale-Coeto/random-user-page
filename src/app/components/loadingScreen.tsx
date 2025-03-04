const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 bg-black opacity-25 z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-400 border-solid"></div>
        </div>
    )
}

export default LoadingScreen;