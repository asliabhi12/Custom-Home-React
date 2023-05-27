// import React, { useEffect, useState } from 'react';
// import { FirefoxBookmarks } from 'firefox-bookmarks';
// import ChromeBookmarks from 'chrome-bookmarks';
// import detectBrowser from 'detect-browser';

// const BookmarkRetriever = () => {
//   const [bookmarks, setBookmarks] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const activeBrowser = detectBrowser.detect();

//     switch (activeBrowser && activeBrowser.name) {
//       case 'firefox':
//         const firefoxBookmarks = new FirefoxBookmarks();
//         firefoxBookmarks.getTree()
//           .then((bookmarks) => {
//             setBookmarks(bookmarks);
//           })
//           .catch((error) => {
//             setError(error);
//           });
//         break;

//       case 'chrome':
//         const chromeBookmarks = new ChromeBookmarks();
//         chromeBookmarks.getTree()
//           .then((bookmarks) => {
//             setBookmarks(bookmarks);
//           })
//           .catch((error) => {
//             setError(error);
//           });
//         break;

//       default:
//         setError(new Error('Browser not supported.'));
//     }
//   }, []);

//   return (
//     <div>
//       {error && <p>Error: {error.message}</p>}
//       {bookmarks.length > 0 ? (
//         <ul>
//           {bookmarks.map((bookmark) => (
//             <li key={bookmark.id}>{bookmark.title}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No bookmarks found.</p>
//       )}
//     </div>
//   );
// };

// export default BookmarkRetriever;
