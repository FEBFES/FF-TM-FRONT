import { useEffect, useState } from "react";

export const useOffline = () => {
  const [isOffline, setIsOffline] = useState(false);

  const isOfflineToggle = (isOff: boolean) => {
    setIsOffline(isOff);
  };

  useEffect(() => {
    window.addEventListener("offline", () => {
      isOfflineToggle(true);
    });

    window.addEventListener("online", () => {
      isOfflineToggle(false);
    });

    return () => {
      window.removeEventListener("offline", () => isOfflineToggle(true));
      window.removeEventListener("online", () => isOfflineToggle(false));
    };
  }, []);

  useEffect(() => {
    //todo add antd notification
    // isOffline &&
    // toast.warning(i18n.t('notification.toast.network.error'), {
    //   autoClose: false,
    //   position: 'top-center',
    // });
  }, [isOffline]);
};
