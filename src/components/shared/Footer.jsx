const Footer = () => {
    return (
        <>
            <footer class="bg-blue-100 rounded-lg shadow m-4">
                    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span class="text-sm text-gray-500 sm:text-center">© 2024 <a href="#" class="hover:underline">MediaTech™</a>. All Rights Reserved.
                        </span>
                    <ul class="flex flex-wrap items-center text-sm font-medium text-gray-500">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                    </div>
                </footer>
        </>
    )
}

export default Footer