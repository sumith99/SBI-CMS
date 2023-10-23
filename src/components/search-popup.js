// import React, { useContext, useState } from "react";
// import { Link } from "gatsby";
// import { LogoImage } from "@/data";
// import { SearchContext } from "@/context/search-context";

// const SearchPopup = () => {
//   const { searchStatus, updateSearchStatus, screenOptions } = useContext(SearchContext);
//   const handleSearchClick = e => {
//     e.preventDefault();
//     updateSearchStatus(!searchStatus);
//   };
//   const [isSearchingInitialized, setIsSearchingInitialized] = useState(false);
//   const [searchOptions, setSearchOptions] = useState();


//   const handleChange = (searchString) => {
//     searchString.length ? setIsSearchingInitialized(true) : setIsSearchingInitialized(false)
//     setSearchOptions(screenOptions.filter((value) => value.Name.toLowerCase().includes(searchString.toLowerCase())));
//   }
//   const handleSearch = e => {
//     e.preventDefault();
//   };
//   return (
//     <div className="searchFixed popupBG animated fadeIn d-block">
//       <div className="container-fluid">
//         <a
//           href=""
//           id="sfCloser"
//           onClick={handleSearchClick}
//           className="close-popup"
//         ></a>

//         <div className="container mobileContainer">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="logo2">
//                 <Link to="/" className="logo2Link">
//                   <img className="logo2Image" src={LogoImage.largeLogo} alt="" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="searchForms">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-8 offset-lg-2">
//                 <form onSubmit={handleSearch}>
//                   <input
//                     type="text"
//                     name="s"
//                     className="searchField"
//                     placeholder="Search here..."
//                     onChange={(e) => handleChange(e.target.value)}
//                   />
//                   <button type="submit">
//                     <i className="fa fa-search"></i>
//                   </button>
//                 </form>
//               </div>
//               <div className="col-lg-8 offset-lg-2 mt-3 searchContentArea row" >
//                 {
//                   searchOptions && searchOptions.length && searchOptions.map((item) => {
//                     return <p onClick={handleSearchClick} className="col-12 "><Link className="searchField text-white" to={item.Path}>{item.Name}</Link></p>
//                   })
//                 }
//                 {isSearchingInitialized && !searchOptions.length && <p className="col-12 searchField">No result found.</p>}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchPopup;
