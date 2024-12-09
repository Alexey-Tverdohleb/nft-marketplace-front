/* eslint-disable max-len */
import React, { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import useComponentVisible from 'hooks/useComponentVisible';
import DefaultCard from 'components/Card/DefaultCard';
import Icon from 'components/Icon/Icon';
import { ReactComponent as BellIcon } from 'assets/icons/Bell.svg';
import { markNotificationSeen, setAllSeen } from 'store/slices/notifications.slice';

function NotificationButton() {
  const dispatch = useDispatch();
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);
  const { darkMode } = useSelector((state: RootState) => state.settings);
  const { pathname } = useLocation();

  const { notifications } = useSelector((state: RootState) => state.notifications);
  const showBadge = useMemo(() => !!notifications.filter((item) => item.seen).length, [notifications]);

  const handleMarkAll = () => dispatch(setAllSeen());
  const handleMarkNotification = (id: number) => dispatch(markNotificationSeen(id));

  useEffect(() => {
    setIsComponentVisible(false);
  }, [pathname]);

  return (
    <div className="relative">
      <button
        className="relative"
        type="button"
        onClick={() => setIsComponentVisible(true)}
      >
        <BellIcon className="w-[20px] h-[20px]" />
        { showBadge && (
          <span className="absolute top-[10px] right-[-2px] flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 dark:bg-red-800 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400 dark:bg-red-800" />
          </span>
        )}
      </button>

      {isComponentVisible && (
        <div ref={ref}>
          <DefaultCard className="absolute  px-8 py-9 w-[100vw] right-[-15px] top-[-12px] rounded-2xl  md:w-[500px] md:w-full md:right-0 md:top-auto ">
            <div className="flex justify-between items-center mb-4">
              <h1 className="font-bold text-black-400  dark:text-white text-[24px]">
                Last Updates
              </h1>
              <button
                type="button"
                className="h-auto"
                onClick={() => setIsComponentVisible(false)}
              >
                <Icon name="x" className="stroke-current" />
              </button>
            </div>
            { notifications.length ? (
              <>
                {notifications.map((item, index) => (
                  <button type="button" onClick={() => handleMarkNotification(item.id)} key={item.id} className="relative h-auto flex justify-between mb-4 border rounded-2xl p-2 border-light-gray-400">
                    <div className="mr-4">
                      <div className="absolute rounded-full flex items-center justify-center bg-white top-0 left-0 p-2 dark:bg-black-900">
                        <Icon name={item.event.icon} color="#28A3F5" />
                      </div>
                      <img
                        src={`/images/nft-cover/${index + 1}.png`}
                        className="rounded-lg  h-[70px] w-[70px]"
                        alt="nft item"
                      />
                    </div>

                    <div className="grow text-left">
                      <p className="font-bold text-black-400 dark:text-white text-sm">{item.item.name}</p>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-light-gray-400 dark:text-gray text-sm">{item.content}</p>
                      </div>
                      <p className="text-[12px] dark:text-dark-gray-400">{item.time}</p>
                    </div>
                    { item.seen && <div className="h-[10px] w-[10px] right-[23px] top-[45%] absolute rounded-full bg-red-400 dark:bg-red-800" /> }
                  </button>
                ))}
                <div className="flex items-center justify-between">
                  <Link to="/wallet/activity" className="text-primary dark:text-white">
                    View all updates
                  </Link>
                  <button type="button" className="text-primary dark:text-white h-auto" onClick={handleMarkAll}>Seen All</button>
                </div>
              </>
            ) : (
              <div className="w-full flex flex-col items-center justify-center">
                <BellIcon className="my-12 w-[124px] h-[144px]" color={!darkMode ? '#D0D5DD' : '#606367'} />
                <p className="text-light-gray-400">You don`t have any updates</p>
              </div>
            )}
          </DefaultCard>
        </div>
      )}
    </div>
  );
}

export default NotificationButton;
