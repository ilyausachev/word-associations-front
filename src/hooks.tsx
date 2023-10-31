import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

export enum Version {
    mobile,
    desktop,
}
const getVersion = (): Version => {
    if (document.body.clientWidth < 450) {
        return Version.mobile;
    }
    return Version.desktop;
};
export const useAdaptive = (): { isMobile: boolean } => {
    const [version, setVersion] = useState(getVersion());
    const handleResize = throttle(() => {
        setVersion(getVersion());
    }, 100);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        isMobile: version === Version.mobile,
    };
};
