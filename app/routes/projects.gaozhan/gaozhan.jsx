import jpg0 from '~/assets/gaozhan/0.jpg';
import jpg1 from '~/assets/gaozhan/1.jpg';
import jpg2 from '~/assets/gaozhan/2.jpg';
import jpg3 from '~/assets/gaozhan/3.jpg';
import jpg4 from '~/assets/gaozhan/4.jpg';
import jpg5 from '~/assets/gaozhan/5.jpg';
import jpg6 from '~/assets/gaozhan/6.jpg';
import jpg7 from '~/assets/gaozhan/7.jpg';
import jpg8 from '~/assets/gaozhan/8.jpg';
import jpg9 from '~/assets/gaozhan/9.jpg';
import jpg10 from '~/assets/gaozhan/10.jpg';
import jpg11 from '~/assets/gaozhan/11.jpg';
import jpg12 from '~/assets/gaozhan/12.jpg';
import jpg13 from '~/assets/gaozhan/13.jpg';
import jpg14 from '~/assets/gaozhan/14.jpg';
import jpg15_hengshi from '~/assets/gaozhan/15横式.jpg';
import jpgLOGO from '~/assets/gaozhan/LOGO.jpg';
import jpgMENMIAN from '~/assets/gaozhan/MENMIAN.jpg';
import jpg_xiuxianshike from '~/assets/gaozhan/休闲时刻.jpg';
import jpg_huiyishi from '~/assets/gaozhan/会议室.jpg';
import jpg_bangong from '~/assets/gaozhan/办公.jpg';
import jpg_bangongyijiao from '~/assets/gaozhan/办公一角.jpg';
import jpg_bangongshi1 from '~/assets/gaozhan/办公室1.jpg';
import jpg_bangongshi2 from '~/assets/gaozhan/办公室2.jpg';
import jpg_bangonggongju from '~/assets/gaozhan/办公工具.jpg';
import jpg_kapian from '~/assets/gaozhan/卡片.jpg';
import jpg_guanggao1 from '~/assets/gaozhan/广告1.jpg';
import jpg_guanggao2 from '~/assets/gaozhan/广告2.jpg';
import jpg_guanggaopai from '~/assets/gaozhan/广告牌.jpg';
import jpg_huwaiguanggao from '~/assets/gaozhan/户外广告.jpg';
import jpg_huwaiguanggaopai from '~/assets/gaozhan/户外广告牌.jpg';
import jpg_zhishipai from '~/assets/gaozhan/指示牌.jpg';
import jpg_chaqi from '~/assets/gaozhan/插旗.jpg';
import jpg_qi from '~/assets/gaozhan/旗.jpg';
import jpg_benzi from '~/assets/gaozhan/本子.jpg';
import jpg_zhuomian from '~/assets/gaozhan/桌面.jpg';
import jpg_haibao1 from '~/assets/gaozhan/海报1.jpg';
import jpg_haibao2 from '~/assets/gaozhan/海报2.jpg';
import jpg_zhijinhe from '~/assets/gaozhan/纸巾盒.jpg';
import jpg_dai1 from '~/assets/gaozhan/袋1.jpg';
import jpg_dai2 from '~/assets/gaozhan/袋2.jpg';
import jpg_daizi from '~/assets/gaozhan/袋子.jpg';
import jpg_tie from '~/assets/gaozhan/贴.jpg';
import jpg_chejpg from '~/assets/gaozhan/车jpg.jpg';
import jpg_cheyin from '~/assets/gaozhan/车印.jpg';
import jpg_chepai from '~/assets/gaozhan/车牌.jpg';
import jpg_cheyaoshi from '~/assets/gaozhan/车钥匙.jpg';
import jpg_yusan from '~/assets/gaozhan/雨伞.jpg';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './gaozhan.module.css';

const title = '高瞻VI项目';
const description =
  '高瞻VI项目是我在2017年参与的一个一个综合性的视觉设计项目，旨在为高瞻品牌创建统一的视觉识别系统。该项目涵盖了从标志设计到办公环境、广告宣传等多个方面的设计工作。通过精心设计的视觉元素，高瞻VI项目旨在提升品牌形象，增强用户体验，并传达高瞻品牌的核心价值观。';
const roles = ['User Research', 'VI Design'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Gaozhan = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={jpg0}
          srcSet={`${jpg0} 1280w, ${jpg0} 2560w`}
          width={1280}
          height={800}
          placeholder={jpg0}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${jpg_zhuomian} 800w, ${jpg_zhuomian} 1920w`}
              width={800}
              height={500}
              placeholder={jpg_zhuomian}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Bringing it together</ProjectSectionHeading>
              <ProjectSectionText>
                Teachers needed a better way to create collaborative group activities by
                annotating slides on Slice. Before starting this project, a layer could
                only be annotated by a single user, making it difficult for learners to
                work together.
              </ProjectSectionText>
              <ProjectSectionText>
                Our solution was to allow users to be invited to a layer, where they can
                see others’ annotations and make their own.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${jpg9} 350w, ${jpg9} 700w`}
                width={350}
                height={750}
                placeholder={jpg9}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${jpgMENMIAN} 350w, ${jpgMENMIAN} 700w`}
                width={350}
                height={750}
                placeholder={jpgMENMIAN}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Improving the experience</ProjectSectionHeading>
              <ProjectSectionText>
                A problem we heard about often form users was that it was difficult to
                find images they had previously seen or worked on. To solve this we added
                a new tab that lists all previously annotated slides. In addition, we
                added the ability to favorite slides, so if users find an interesting
                slide they want to annotate later, they can easily save it to their
                account.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${jpg_guanggao1} 800w, ${jpg_guanggao1} 1920w`}
              width={800}
              height={500}
              placeholder={jpg_guanggao1}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        {/* <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Bringing it together</ProjectSectionHeading>
              <ProjectSectionText>
                Teachers needed a better way to create collaborative group activities by
                annotating slides on Slice. Before starting this project, a layer could
                only be annotated by a single user, making it difficult for learners to
                work together.
              </ProjectSectionText>
              <ProjectSectionText>
                Our solution was to allow users to be invited to a layer, where they can
                see others’ annotations and make their own.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Improving the experience</ProjectSectionHeading>
              <ProjectSectionText>
                A problem we heard about often form users was that it was difficult to
                find images they had previously seen or worked on. To solve this we added
                a new tab that lists all previously annotated slides. In addition, we
                added the ability to favorite slides, so if users find an interesting
                slide they want to annotate later, they can easily save it to their
                account.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
                  width={440}
                  height={340}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Meaningful details</ProjectSectionHeading>
              <ProjectSectionText>
                Marking and annotating areas on high resolution biomedical images is the
                core experience of the app, and it was easy to get lost or lose sense of
                scale when zooming in on details. Adding measurements for the perimeter
                and area of an annotation both helped to communicate the overall scale of
                the image and how large the annotated feature is in comparison.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Real-time collaborative annotation facilitated better collaboration
                between learners, and was much easier to run group exercises with the new
                shared layers feature. Learners gave feedback that is was enjoyable to
                work together and see what others were doing, and liked how interactive
                and easy to use the application was.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection> */}
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
