import React from 'react'
/**
 * useAffix Hook Custom
 * @param offset int
 * @returns array
 */
export const useAffix = ({offset=100}) => {
    const [affix, setAffix]   = React.useState(false)
    
    React.useEffect(()=> {
        const handleScroll = ()=> {
          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      
          if (!affix && scrollTop >= offset) {
            setAffix(true);
          }
      
          if (affix && scrollTop < offset) {
            setAffix(false);
          }
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
      });
  return [affix, setAffix];
}
