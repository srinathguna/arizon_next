export default function Pageresult() {
    return (
        <>        
            <form class="max-w-md flex items-center">
                 <label for="Relevance" class="w-full block text-sm font-medium text-gray-900">itemsPerPage</label>
                <select id="Relevance" class="border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected>Relevance</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="32">32</option>
                </select>
            </form>
        </>
    )
}