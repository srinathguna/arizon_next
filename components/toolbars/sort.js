export default function Sort() {
    return (
        <>
            <form class="w-6/12 flex items-center">
                 <label for="Relevance" class="text-nowrap block text-sm font-medium text-gray-900">Sort By</label>
                <select id="Relevance" class="w-4/12 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected>Relevance</option>
                    <option value="US">option 1</option>
                    <option value="CA">option 2</option>
                    <option value="FR">option 3</option>
                    <option value="DE">option 4</option>
                </select>
            </form>
        </>
    )
}