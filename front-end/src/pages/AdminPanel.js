import React, { useRef } from 'react';
import AppList from '../actions/ApplicationList.js';

export default function LandingPage() {
   const appList = useRef();

   return (
      <>
         <section ref={appList} className="pt-0">
            <AppList />
         </section>
      </>
   );
}
