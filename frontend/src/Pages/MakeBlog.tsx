const MakeBlog = () => {
  return (
    <div className='w-full h-screen'>
               {/* this is the navigation bar of the make blog page  */}

               <div className='w-full h-[9vh] flex items-center justify-between'>
                              <div className='w-1/2 flex items-center  gap-3 h-full justify-center pr-32'>
                                             <div >
                                                            <svg  width="120" height="26"><path d="M29.57 1.404l.036-.008V1.12h-7.27l-6.75 15.979-6.75-15.98H1.003v.278l.035.008c1.327.302 2 .752 2 2.374v18.993c0 1.623-.676 2.073-2.003 2.374L1 25.153v.279h5.315v-.278l-.035-.008c-1.327-.302-2-.751-2-2.374V4.88l8.67 20.552h.492l8.924-21.125V23.24c-.114 1.282-.782 1.677-1.983 1.95l-.036.009v.275h9.259V25.2l-.036-.008c-1.203-.274-1.886-.67-2-1.95l-.006-19.464h.006c0-1.622.674-2.072 2-2.374zm4.23 12.582c.15-3.412 1.367-5.875 3.41-5.918.629.01 1.157.219 1.568.62.872.852 1.282 2.634 1.219 5.298h-6.198zm-.092.962h10.85v-.046c-.03-2.61-.78-4.64-2.228-6.033-1.25-1.204-3.103-1.867-5.048-1.867h-.043c-1.01 0-2.248.246-3.13.693a7.316 7.316 0 00-2.623 2.086c-1.185 1.479-1.903 3.477-2.078 5.724a13.717 13.717 0 00-.04.755c-.004.195-.005.39-.001.587.117 5.087 2.846 9.153 7.692 9.153 4.254 0 6.73-3.132 7.348-7.336l-.312-.11c-1.085 2.259-3.034 3.628-5.252 3.461-3.028-.228-5.347-3.32-5.137-7.066m23.122 6.893c-.356.85-1.099 1.319-2.094 1.319-.995 0-1.905-.689-2.552-1.939-.694-1.342-1.06-3.24-1.06-5.487 0-4.678 1.445-7.704 3.68-7.704.937 0 1.674.468 2.026 1.284v12.527zm7.198 3.335c-1.327-.316-2-.787-2-2.492V0l-8.062 2.392v.293l.05-.004c1.111-.09 1.866.064 2.304.472.343.32.51.809.51 1.498v3.11C56.033 7.25 55.088 7 53.94 7c-2.326 0-4.453.987-5.986 2.779-1.599 1.867-2.444 4.42-2.444 7.38 0 5.287 2.584 8.84 6.43 8.84 2.25 0 4.06-1.242 4.888-3.336v2.811h7.233v-.29l-.035-.008zM70.94 3.085c0-1.65-1.236-2.896-2.875-2.896-1.632 0-2.908 1.272-2.908 2.896 0 1.624 1.278 2.896 2.908 2.896 1.64 0 2.875-1.245 2.875-2.896zm1.903 22.092c-1.327-.316-2-.787-2-2.492h-.006V7.055l-7.234 2.092v.284l.043.004c1.566.14 1.994.683 1.994 2.525v13.515h7.24v-.29l-.037-.008zm18.536 0c-1.327-.316-2-.787-2-2.492V7.055L82.49 9.078v.285l.04.004c1.28.136 1.65.71 1.65 2.56v9.88c-.426.85-1.227 1.356-2.196 1.39-1.573 0-2.439-1.07-2.439-3.012V7.055l-7.234 2.092v.284l.044.004c1.565.14 1.994.683 1.994 2.525v8.362a9.443 9.443 0 00.15 1.741l.13.57C75.243 24.845 76.848 26 79.362 26c2.129 0 3.996-1.328 4.818-3.405v2.885h7.233v-.291l-.034-.012zm28.102.298v-.291l-.035-.009c-1.44-.334-2.001-.964-2.001-2.248V12.295C117.445 8.98 115.597 7 112.5 7c-2.257 0-4.16 1.314-4.893 3.36-.582-2.168-2.257-3.36-4.734-3.36-2.175 0-3.88 1.156-4.612 3.11V7.056l-7.233 2.006v.286l.043.004c1.547.138 1.994.697 1.994 2.492v13.631h6.75v-.29l-.037-.01c-1.148-.271-1.519-.767-1.519-2.04V10.95c.304-.715.917-1.562 2.127-1.562 1.504 0 2.266 1.05 2.266 3.116v12.972h6.751v-.29l-.035-.01c-1.149-.271-1.52-.767-1.52-2.04V12.294a7.107 7.107 0 00-.095-1.21c.322-.777.97-1.696 2.23-1.696 1.524 0 2.265 1.02 2.265 3.116v12.972h7.233z"></path></svg>
                                             </div>
                                             <div className="f2 h-fit mt-2 opacity-80 tracking-wide">
                                                            <h2>Draft in NikoChan</h2>
                                             </div>
                              </div>

                              <div className="w-1/2 h-full flex items-center  justify-center gap-6 pl-32">
                                             <div className="px-[10px] flex items-center justify-center py-[2px] rounded-full bg-[#c6e1c5] text-[0.9rem] f2 text-white">
                                                            Publish
                                             </div>

                                             <div className="opacity-70">
                                             <svg  width="29" height="25"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fill-rule="evenodd"></path></svg>
                                             </div>

                                             <div className="opacity-70">
                                             <svg  width="29" height="30" viewBox="-293 409 25 25"><path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 00-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 001 1h3.49a3.079 3.079 0 003.01 2.45 3.08 3.08 0 003.01-2.45h3.49a1 1 0 001-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 01-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 014.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z"></path></svg>
                                             </div>

                                             <div className="w-8 h-8 rounded-full text-white f2 text-[1.3rem] pb-1 bg-red-500 flex items-center justify-center first-letter:">
                                                                           <h1>n</h1>
                                             </div>
                              </div>
               </div>
               
    </div> 
  )
}

export default MakeBlog