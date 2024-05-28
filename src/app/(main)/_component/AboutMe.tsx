import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function AboutMe() {
  return (
    <div className="w-full px-4">
      <div className="w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
        <Disclosure as="div" className="sm:p-6 sm:w-[80vw]">
          <DisclosureButton className="group flex w-full text-start break-keep sm:items-center sm:justify-between">
            <span className="text-sm/6 font-medium text-black group-data-[hover]:text-black/80">
              더 좋은 사용자 경험을 제공하기 위해 고민하고 이를 코드로 표현하고자 합니다.
            </span>
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 sm:p-8 text-sm/5 break-keep text-black/50">
            <p>
              웹/모바일 서비스가 늘어남에 따라 사용자는 더 많은 유형의 사용자 경험을 하게 됩니다.
              이러한 변화 속에서 서비스의 차별점을 갖기 위해서는 더 나은 사용자 경험이 필요하다고
              생각했습니다.
              <br />
              <br />
              그래서 UX 관련 교육을 이수하면서 사용자 경험에 대한 이해를 높이고자 노력했습니다. UX
              교육을 들으며 개발 뿐만 아니라 함께 일하는 기획자, 디자이너와의 소통 방법에 대한
              스킬을 높일 수 있었습니다.
            </p>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="sm:p-6 sm:w-[80vw]">
          <DisclosureButton className="group flex w-full text-start break-keep sm:items-center sm:justify-between">
            <span className="text-sm/6 font-medium text-black group-data-[hover]:text-black/80">
              유지보수가 쉬운 코드, 중복 없는 코드를 쓰려고 노력합니다.
            </span>
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 sm:p-8 text-sm/5 break-keep text-black/50">
            React 를 활용한 프로젝트에서 재사용 컴포넌트에 대해 고민하며 Styled Component 를 적용한
            디자인 시스템을 만들어 본 경험이 있습니다.
            <br />
            <br />
            디자인 시스템 구축은 시간이 오래 걸리는 작업일 수 있습니다. 하지만 한 번 시스템이 구축된
            뒤에는 더욱 더 빠른 서비스 구현을 만들어 낼 수 있고, 사용자에게 동일한 UI 제공을 통해
            일관성 있는 사용자 경험을 제공할 수 있습니다.
            <br />
            <br />
            필요성을 이해하고 프로젝트에 반영함으로써 코드 작성의 효율성을 높이고자 했습니다.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="sm:p-6 sm:w-[80vw]" defaultOpen={true}>
          <DisclosureButton className="group flex w-full text-start break-keep sm:items-center sm:justify-between">
            <span className="text-sm/6 font-medium text-black group-data-[hover]:text-black/80">
              업무 가시성을 높이는 소통에 큰 관심이 있습니다.
            </span>
            <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 sm:p-8 text-sm/5 break-keep text-black/50">
            <p>
              프론트엔드 개발 리더를 맡으며 내가 작성하는 코드 뿐만 아니라 전반적인 프로젝트에 대한
              이해가 필요했던 경험이 있습니다.
              <br />
              <br />
              노션을 통한 API 문서, 기능명세서 관리를 통해 프론트엔드 백엔드 파트 간 소통을 더욱
              편하게 만들었습니다. 지라를 통한 이슈 관리와 함께 깃 플로우를 통해 브랜치를 관리하며
              커밋 별 코드 리뷰를 통한 코드 관리를 진행했습니다. 이를 통해 프로젝트 전반의 코드에
              대해 더 잘 이해하고 더 나은 코드를 만들기 위한 협업을 진행할 수 있었습니다.
              <br />
              <br />
              해당 프로젝트를 경험하며 프로젝트 관리에 대한 중요성을 이해하고 팀원들과 함께 더
              효율적인 프로젝트를 진행할 수 있도록 노력하고 있습니다.
            </p>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
}
