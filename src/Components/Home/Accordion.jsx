import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { Tab as BaseTab } from '@mui/base/Tab';
import { useTheme } from '@mui/system';
import { useTranslation } from 'react-i18next';

function useIsDarkMode() {
  const theme = useTheme();
  return theme.palette.mode === 'dark';
}

const Accordion = () => {
  const { t, i18n } = useTranslation();
  const languages = localStorage.getItem('i18nextLng');

  const isDarkMode = useIsDarkMode();

  const Tab = React.forwardRef((props, ref) => {
    return (
      <BaseTab
        ref={ref}
        {...props}
        slotProps={{
          ...props.slotProps,
          root: (ownerState) => {
            const resolvedSlotProps = resolveSlotProps(
              props.slotProps?.root,
              ownerState,
            );
            return {
              ...resolvedSlotProps,
              className: clsx(
                `font-sans w-[200px] leading-none text-center text-[15px] px-4 py-3 m-1 border-none rounded-md cursor-pointer transition-colors duration-300 ease-in-out
                ${ownerState.selected
                  ? 'bg-[#f00] text-white'
                  : 'bg-[#292D31] text-white hover:bg-[#292D31]'
                }`,
                resolvedSlotProps?.className,
              )
            }
          }
        }}
      />
    );
  });


  return (
    <div className={isDarkMode ? 'dark' : ''}>

      <Tabs defaultValue={0}>

        <TabsList className="tablist flex flex-row flex-wrap max-p470:flex-col max-p470:justify-center max-p470:items-center max-p470:flex-nowrap">

          <Tab data-aos="zoom-in" className="btn-u w-[200px] leading-none text-center text-[15px] px-4 py-3 ml-6 border-none rounded-md cursor-pointer bg-[#292D31] text-white transition-colors duration-300 ease-in-out hover:bg-[#f00] active aos-init aos-animate max-p1320:ml-28 max-p1220:ml-10 max-p1160:ml-24 max-p992:ml-10 max-p900:ml-32 max-p830:ml-12 max-p700:ml-4 max-p660:ml-20 max-p560:ml-12 max-p500:ml-6 max-p456:ml-24 max-p360:ml-12 " value={0}>{t('Visa Consultations')}</Tab>

          <Tab data-aos="zoom-in" className="btn-u w-[200px] leading-none text-center text-[15px] px-4 py-3 m-2 border-none rounded-md cursor-pointer bg-[#292D31] text-white transition-colors duration-300 ease-in-out hover:bg-[#f00] active aos-init aos-animate max-p456:ml-24 max-p360:ml-12" value={1}>{t('Tourist Visas')}</Tab>

          <Tab data-aos="zoom-in" className="btn-u w-[200px] leading-none text-center text-[15px] px-4 py-3 ml-1 border-none rounded-md cursor-pointer bg-[#292D31] text-white transition-colors duration-300 ease-in-out hover:bg-[#f00] active aos-init aos-animate max-p660:ml-20 max-p560:ml-12 max-p500:ml-6 max-p456:ml-24 max-p360:ml-12" value={2}>{t('Business Visas')}</Tab>

          <Tab data-aos="zoom-in" className="btn-u w-[200px] leading-none text-center text-[15px] px-4 py-3 m-1 border-none rounded-md cursor-pointer bg-[#292D31] text-white transition-colors duration-300 ease-in-out hover:bg-[#f00] active aos-init aos-animate max-p900:ml-32 max-p830:ml-12 max-p700:ml-4 max-p456:ml-24 max-p360:ml-12" value={3}>{t('Document Preparation')}</Tab>

          <Tab data-aos="zoom-in" className="btn-u w-[200px] leading-none text-center text-[15px] px-4 py-3 m-1 border-none rounded-md cursor-pointer bg-[#292D31] text-white transition-colors duration-300 ease-in-out hover:bg-[#f00] active aos-init aos-animate max-p1160:ml-[300px] max-p992:ml-[150px] max-p900:ml-2 max-p660:ml-20 max-p560:ml-12 max-p500:ml-6 max-p456:ml-24 max-p360:ml-12" value={4}>{t('Tour Packages')}</Tab>

          <Tab data-aos="zoom-in" className="btn-u w-[200px] leading-none text-center text-[15px] px-4 py-3 m-1 border-none rounded-md cursor-pointer bg-[#292D31] text-white transition-colors duration-300 ease-in-out hover:bg-[#f00] active aos-init aos-animate max-p1320:ml-[500px] max-p1160:ml-24 max-p900:ml-2 max-p456:ml-24 max-p360:ml-12" value={5}>{t("Insurance")}</Tab>

        </TabsList>

        <TabPanel className="ml-[30px] text-black text-[18px] mt-[25px] font-mono font-bold ">{t("EASY VISA CONSULTING specialists provide detailed consultations on visa applications for countries such as Schengen, Canada, the USA, the United Kingdom, Japan, and Korea. We explain all the nuances of document submission and help you prepare for the process.")}</TabPanel>

        <TabPanel className="ml-[30px] text-black text-[18px] mt-[25px] font-mono font-bold ">{t("We assist in obtaining tourist visas for comfortable travel to popular countries, including Europe, North America, and Asia. Our experts provide full support at every stage.")}</TabPanel>

        <TabPanel className="ml-[30px] text-black text-[18px] mt-[25px] font-mono font-bold ">{t("For business trips, EASY VISA CONSULTING offers comprehensive solutions for visa applications to the world's leading countries. We ensure a fast and professional document submission process.")}</TabPanel>

        <TabPanel className="ml-[30px] text-black text-[18px] mt-[25px] font-mono font-bold ">{t("We carefully check all your documents to ensure they meet the requirements of visa centers. We also assist in gathering the necessary certificates and extracts for a successful visa acquisition.")} </TabPanel>

        <TabPanel className="ml-[30px] text-black text-[18px] mt-[25px] font-mono font-bold ">{t("We offer the selection of optimal tourist packages, including trip organization, hotel reservations, and excursions, to make your vacation as comfortable as possible.")} </TabPanel>

        <TabPanel className="ml-[30px] text-black text-[18px] mt-[25px] font-mono font-bold ">{t("We arrange travel insurance that will protect you and your loved ones during your trip, ensuring safety and confidence in any situation.")} </TabPanel>

      </Tabs>

    </div>
  );
};

const resolveSlotProps = (fn, args) =>
  typeof fn === 'function' ? fn(args) : fn;

const TabsList = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  return (
    <BaseTabsList
      ref={ref}
      className={clsx()}
      {...other}
    />
  );
});

TabsList.propTypes = {
  className: PropTypes.string,
};

const Tab = React.forwardRef((props, ref) => {
  return (
    <BaseTab
      ref={ref}
      {...props}
      slotProps={{
        ...props.slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `font-sans ${ownerState.selected} 
              ${ownerState.disabled
                ? 'cursor-not-allowed opacity-50'
                : 'cursor-pointer'
              }`,
              resolvedSlotProps?.className,
            ),
          };
        },
      }}
    />
  );
});

Tab.propTypes = {
  slotProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
};

const TabPanel = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  return (
    <BaseTabPanel
      ref={ref}
      className={clsx(className)}
      {...other}
    />
  );
});

TabPanel.propTypes = {
  className: PropTypes.string,
};

export default Accordion;