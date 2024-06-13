export default function Header() {
    const navigation = [
      { name: 'Login/Sign Up', href: '#', current: true },
      { name: 'Order Status', href: '#', current: false },
      { name: 'My Favorites', href: '#', current: false },
      { name: 'Cart (0)', href: '#', current: false },
    ]
    
    return (        
            <>
            <nav class="bg-white border-gray-200 bg-white">
                <div class="max-w-screen-xl mx-auto">
                    <div class="flex flex-wrap items-center justify-between mx-auto py-4">                        
                        <form class="max-w-sm">
                        <select id="countries" class="border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Call center hours</option>
                            <option value="US">10-2</option>
                            <option value="CA">2-6</option>
                            <option value="FR">6-10</option>
                            <option value="DE">10-10</option>
                        </select>
                        </form>
                        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                                        {
                                            navigation.map((item)=>{
                                                return (                                            
                                                <li>
                                                    <a href="#" class="block py-2 px-3 text-black" aria-current="page">{item.name}</a>
                                                </li>
                                                )
                                            })
                                        }

                            </ul>
                        </div>
                    </div>  
                    <div class="max-w-screen-xl flex items-center">
                        <a href="#" class="flex items-center text-black space-x-3">
                            <span class="self-center text-black text-3xl font-black whitespace-nowrap text-black">Home click</span>
                        </a>
                        <form class="w-5/12 ml-auto">   
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <input type="search" id="default-search" class="block w-full p-4 ps-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for Anything" required />
                                <div class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                            </div>
                            </form>
                        </div>
                </div>

                </nav>
            </>
    )
}