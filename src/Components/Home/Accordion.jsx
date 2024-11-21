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

  return (
    <div className={isDarkMode ? 'dark' : ''}>

      <Tabs defaultValue={0}>

        <TabsList className="flex flex-row flex-wrap">

          <Tab data-aos="zoom-in" className="btn-u w-[200px] leading-none text-center text-[15px] px-4 py-3 ml-6 border-none rounded-md cursor-pointer bg-[#292D31] text-white transition-colors duration-300 ease-in-out hover:bg-[#f00] active aos-init aos-animate" value={0}>{t('Visa Consultations')}</Tab>

          <Tab data-aos="zoom-in" className="btn-u w-[200px] leading-none text-center text-[15px] px-4 py-3 m-2 border-none rounded-md cursor-pointer bg-[#292D31] text-white transition-colors duration-300 ease-in-out hover:bg-[#f00] active aos-init aos-animate" value={1}>{t('Tourist Visas')}</Tab>

          <Tab data-aos="zoom-in" className="btn-u w-[200px] leading-none text-center text-[15px] px-4 py-3 ml-1 border-none rounded-md cursor-pointer bg-[#292D31] text-white transition-colors duration-300 ease-in-out hover:bg-[#f00] active aos-init aos-animate" value={2}>{t('Business Visas')}</Tab>

          <Tab data-aos="zoom-in" className="btn-u w-[200px] leading-none text-center text-[15px] px-4 py-3 m-1 border-none rounded-md cursor-pointer bg-[#292D31] text-white transition-colors duration-300 ease-in-out hover:bg-[#f00] active aos-init aos-animate" value={3}>{t('Document Preparation')}</Tab>

          <Tab data-aos="zoom-in" className="btn-u w-[200px] leading-none text-center text-[15px] px-4 py-3 m-1 border-none rounded-md cursor-pointer bg-[#292D31] text-white transition-colors duration-300 ease-in-out hover:bg-[#f00] active aos-init aos-animate" value={4}>{t('Tour Packages')}</Tab>

          <Tab data-aos="zoom-in" className="btn-u w-[200px] leading-none text-center text-[15px] px-4 py-3 m-1 border-none rounded-md cursor-pointer bg-[#292D31] text-white transition-colors duration-300 ease-in-out hover:bg-[#f00] active aos-init aos-animate" value={5}>{t("Insurance")}</Tab>

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