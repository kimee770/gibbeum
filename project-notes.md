# GIBBEUM 프로젝트 노트

## Figma 파일
- File Key: `z8MBD325ctQ7ShvkVFEZfn`
- Color Guide Node: `2034-497`

---

## 색상 사용 규칙

> **특별히 지정하지 않은 경우 반드시 아래 디자인 시스템 컬러 토큰을 사용할 것.**
> 임의의 hex 값(`#06317A` 등) 사용 금지. 가이드에 없는 색상이 필요한 경우 먼저 확인.

---

## Design System — Color Guide

### Primary Blue

| Token | Hex | 이름 |
|-------|-----|------|
| `blue-900` | `#002559` | DK_Blue |
| `blue-800` | `#003682` | D_Blue |
| `blue-700` | `#0047AB` | **Gibbeum Blue ★ PRIMARY** |
| `blue-600` | `#125CC3` | — |
| `blue-500` | `#086FED` | Sky blue |
| `blue-400` | `#0091FF` | Blue |
| `blue-300` | `#5CABFF` | Azure |
| `blue-200` | `#B3D9FF` | Sky-hover |
| `blue-100` | `#DBEDFF` | Sky |
| `blue-50`  | `#EEF5FC` | L_Blue |
| `skyblue`  | `#10D6FF` | 헤더 accent (Navigation 섹션 타이틀 등) |

**Hover 패턴 예시:** `bg-blue-600` → `hover:bg-blue-800`

---

### Neutral Gray

| Token | Hex | 이름 |
|-------|-----|------|
| `neutralgray-900` | `#212121` | Coal |
| `neutralgray-800` | `#3D3D3D` | Charcoal |
| `neutralgray-700` | `#595959` | Shadow |
| `neutralgray-600` | `#737373` | D-Grey |
| `neutralgray-500` | `#8F8F8F` | Grey |
| `neutralgray-400` | `#D5D7DA` | Ash |
| `neutralgray-300` | `#E9EAEB` | Concrete |
| `neutralgray-200` | `#F5F5F5` | Silver |
| `neutralgray-100` | `#FAFAFA` | Smoke |
| `neutralgray-50`  | `#FDFDFD` | Snow |

---

### Slate

| Token | Hex | 이름 |
|-------|-----|------|
| `slate-900` | `#2D3444` | Midnight |
| `slate-800` | `#434D61` | Twilight |
| `slate-700` | `#5C687E` | Storm |
| `slate-600` | `#77839C` | Slate_Grey |
| `slate-500` | `#95A1B9` | Cool_Grey |
| `slate-400` | `#B5C0D6` | L_Grey |
| `slate-300` | `#D6E0F3` | Cloud |
| `slate-200` | `#E2E8F6` | Steel |
| `slate-100` | `#EDF1F9` | Fog |
| `slate-50`  | `#F9FAFC` | Mist |

---

### System Color

| Token | Hex | 이름 |
|-------|-----|------|
| `system-black`  | `#000000` | Black |
| `system-white`  | `#FFFFFF` | White |
| `system-violet` | `#9810FA` | Violet |
| `system-link`   | `#1447E6` | Link |
| `system-safe`   | `#009262` | Safe |
| `system-green`  | `#00A63E` | Green |
| `system-peacok` | `#00D5BE` | Peacock |
| `system-mint`   | `#55FFC7` | Mint |
| `system-danger` | `#E02B1D` | Danger |
| `system-yellow` | `#FFDF20` | Yellow |

---

### Brand

| Token | Hex | 이름 |
|-------|-----|------|
| `whatsapp` | `#25D366` | WhatsApp Green |

---

## Tailwind 사용법

```tsx
// ✅ 올바른 사용
className="bg-blue-700 hover:bg-blue-800"
className="text-skyblue"
className="border-neutralgray-300"

// ❌ 잘못된 사용
className="bg-[#0047AB]"
className="hover:bg-[#06317A]"
```

---

## 브레이크포인트

| 이름 | 값 |
|------|----|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |

---

## 헤더 구조 메모

- Nav bar: `max-w-[1516px] mx-auto px-6 md:px-10 xl:px-[144px]`
- Dropdown 내부 컨텐츠: **동일한 padding 사용** → 로고/메뉴 정렬 일치
- Desktop dropdown: `px-6 md:px-10 xl:px-[144px] py-10`
- Mobile/Tablet dropdown: `p-8`
- 검색↔메뉴 간격: mobile `gap-6`(24px), tablet `gap-8`(32px)
- 섹션 간 간격 (mobile flex-col): `gap-8`(32px), tablet `gap-6`(24px)

---

## 작업 히스토리

### Header.tsx 완성 내역

#### 에셋 (public/assets/header/)
Figma MCP API로 다운로드한 SVG 파일들:
- `logo-mark1.svg`, `logo-mark2.svg`, `logo-mark3.svg` — 3파트 로고 마크
- `logo-text.svg` — "KANG REPAIR HERNIA CENTER" 태그라인
- `icon-book.svg` — Educational Cartoons
- `icon-video.svg` — Video Library
- `icon-chat1~4.svg` — Patient Forum (4파트 SVG)
- `icon-search.svg` — 검색 아이콘
- `icon-hamburger.svg` — 햄버거 메뉴

#### 로고 사이즈
- Desktop/Tablet: 145×44px (마크 144×28 + 태그라인 141×7)
- Mobile: 111×22px (마크만, 태그라인 없음)

#### Nav Bar 높이
- Mobile (<768px): `h-[44px]`
- Tablet/Desktop (≥768px): `h-[80px]`

#### 드롭다운 정렬 핵심
Nav bar와 dropdown이 동일한 padding(`px-6 md:px-10 xl:px-[144px]`)을 사용해야
로고 왼쪽 ↔ Navigation 1컬럼 왼쪽, 햄버거 오른쪽 ↔ Get Started 오른쪽이 정확히 정렬됨.

#### 드롭다운 Desktop 3컬럼 구조
- 컬럼1 Navigation: `w-[240px]`
- 컬럼2 Resources: `w-[240px]`
- 컬럼3 Get Started: `w-[288px]`
- 배치: `justify-between` (컬럼 간 여백 자동)

#### Free Consultation 버튼 (드롭다운 내)
- Default: `bg-blue-600` (`#125CC3`)
- Hover: `hover:bg-blue-800` (`#003682`)
- 원칙: hover 시 배경색만 변경, 텍스트(`text-white`)는 유지

#### Nav mb-[2px]
헤더 하단에 2px 여백 — `nav` 태그에 `mb-[2px]` 적용

#### globals.css 컬러 토큰
Figma 디자인 시스템 기준으로 전체 정리 완료.
Bootstrap 계열 값 제거, 누락 색상 추가, Danger 색상 수정(`#FB2C36` → `#E02B1D`).

---

## Spacing Tokens (Figma Variables)

> **사용법:** `gap-[var(--spacing-sm)]`, `py-[var(--spacing-xl)]` 등 CSS 변수로 사용
> 반응형 자동 적용 (globals.css @media 오버라이드)

| Token | Mobile | Tablet | Web |
|-------|--------|--------|-----|
| `--spacing-none` | 0 | 0 | 0 |
| `--spacing-xs`   | 4 | 4 | 8 |
| `--spacing-s`    | 8 | 8 | 16 |
| `--spacing-sm`   | 10 | 16 | 24 |
| `--spacing-m`    | 24 | 32 | 32 |
| `--spacing-ml`   | 32 | 40 | 56 |
| `--spacing-xl`   | 40 | 56 | 80 |

---

## Typography Tokens (Figma Variables) — Font Size

> **사용법:** `text-[length:var(--text-h2)]`, `text-[length:var(--text-body-m)]`
> 반응형 자동 적용 (globals.css @media 오버라이드)

| Token | Mobile | Tablet | Web | 폰트 |
|-------|--------|--------|-----|------|
| `--text-lora-h1` | 36 | 38 | 64 | Lora |
| `--text-lora-h2` | 32 | 34 | 48 | Lora |
| `--text-lora-h3` | 28 | 28 | 36 | Lora |
| `--text-lora-h4` | 20 | 20 | 24 | Lora |
| `--text-h1` | 34 | 34 | 48 | Inter |
| `--text-h2` | 32 | 32 | 42 | Inter |
| `--text-h3` | 26 | 26 | 36 | Inter |
| `--text-h4` | 20 | 20 | 26 | Inter |
| `--text-h5` | 20 | 20 | 24 | Inter |
| `--text-h6` | 18 | 18 | 20 | Inter |
| `--text-body-xl`  | 16 | 16 | 20 | Inter |
| `--text-body-l`   | 16 | 18 | 18 | Inter |
| `--text-body-16b` | 16 | 16 | 16 | Inter Bold |
| `--text-body-m`   | 14 | 16 | 16 | Inter |
| `--text-body-s`   | 12 | 12 | 14 | Inter |
