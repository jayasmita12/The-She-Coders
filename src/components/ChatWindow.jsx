import React from 'react'

const ChatWindow = ({chatAppDisplay , setChatAppDisplay}) => {
  return (
    <div class="flex-1 bg-white w-full sm:w-[20rem] border-2 rounded-2xl ">
            <div class="flex justify-between rounded-t-2xl  border-b p-4 bg-white ">
                <h2 class="text-lg font-semibold">John Doe</h2>
                <button class="text-gray-500 focus:outline-none" onClick={()=>{ chatAppDisplay=false , setChatAppDisplay(chatAppDisplay)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <hr />
            {/* <!-- Chat messages --> */}
            <div class="flex-1 p-4 overflow-y-auto">
                {/* <!-- Sender message --> */}
                <div class="flex items-start justify-end mb-4">
                    <div class="max-w-xs px-4 py-2 bg-blue-500 rounded-lg shadow-lg">
                        <p class="text-sm text-white">Hello!</p>
                    </div>
                </div>
                {/* <!-- Receiver message --> */}
                <div class="flex items-start mb-4">
                    <div class="max-w-xs px-4 py-2 bg-gray-200 rounded-lg shadow-lg">
                        <p class="text-sm text-gray-800">Hi there!</p>
                    </div>
                </div>
                {/* <!-- Add more chat messages here --> */}
            </div>
            {/* <!-- Chat input --> */}
            <div class="flex items-center justify-between p-4 shadow-2xl rounded-b-2xl bg-white border-t">
                <input type="text"
                    class="flex-1 px-4 py-2 mr-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Type a message..."/>
                <button
                    class="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">Send</button>
            </div>
        </div>
  )
}

export default ChatWindow
