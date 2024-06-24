import { ReactNode } from 'react';
import s from './section.module.css';

type SectionProps = {
  sectionData: Section;
};

export type Section = {
  id: number;
  pre_title: string;
  title: string;
  cover_image?: string;
  content?: string;
  class_name?: string;
};

export const Section = (props: SectionProps) => {
  
  const { sectionData } = props;

  return (
    <div className={s.second_section}>
      <div className={s.second_section_container}>
        <div className={s.second_section_text}>
          <div className={s.mini_header_container}>
            <div className={s.mini_header}></div>
            <p className={s.mini_header_p}>{sectionData.pre_title}</p>
          </div>
          <h1 className={s.header}>{sectionData.title}</h1>
          <p className={s.p}>{sectionData.content}</p>
        </div>
        <div className={s.second_section_image}>
          <img className={s.second_section_image} src={sectionData.cover_image} alt="Baikal-image" />
        </div>
      </div>
    </div>
  );
};

// export const Section = (props: SectionProps) => {
//   const { sectionData } = props;

//   return (
//     <div className={s.second_section}>
//         <div className={s.second_section_container}>
//         <div className={s.second_section_text}>
//             <div className={s.mini_header_container}>
//               <div className={s.mini_header}></div>
//               <p className={s.mini_header_p}>{sectionData.pre_title}</p>
//             </div>
//             <h1 className={s.header}>{sectionData.title}</h1>
//             <p className={s.p}>{sectionData.content}</p>
//         </div>
//         <div className={s.second_section_image}>
//             <img className={s.second_section_image} src={sectionData.cover_image} alt="Baikal-image" />
//         </div>
//         </div>
//     </div>
//   );
// };

// export const BaseContainer = ({ children }: { children: ReactNode }) => {
//   return <div className={style.baseContainer}>{children}</div>;
// };
