# E-commerce 프로젝트

이 프로젝트는 Turborepo를 사용하는 모노레포 구조의 전자상거래 플랫폼입니다.

## 프로젝트 구조

- **apps/client**: 고객용 Next.js 애플리케이션 (포트 3002)
- **apps/admin**: 관리자용 Next.js 애플리케이션 (포트 3003)
- **packages**: 공유 패키지들 (types, eslint-config, typescript-config)

## 사전 요구사항

- Node.js >= 18
- pnpm 9.0.0

## 설치 방법

1. 의존성 설치:

```bash
pnpm install
```

## 실행 방법

### 모든 앱 동시 실행

루트 디렉토리에서 다음 명령어를 실행하면 client와 admin 앱이 모두 실행됩니다:

```bash
pnpm dev
```

실행 후:

- **Client 앱**: http://localhost:3002
- **Admin 앱**: http://localhost:3003

### 개별 앱 실행

특정 앱만 실행하려면 해당 앱 디렉토리로 이동하여 실행:

**Client 앱 실행:**

```bash
cd apps/client
pnpm dev
```

**Admin 앱 실행:**

```bash
cd apps/admin
pnpm dev
```

## 기타 명령어

### 빌드

```bash
pnpm build
```

### 린트

```bash
pnpm lint
```

### 타입 체크

```bash
pnpm check-types
```

### 코드 포맷팅

```bash
pnpm format
```

## 기술 스택

- **프레임워크**: Next.js 15
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **인증**: Clerk
- **결제**: Stripe
- **상태 관리**: Zustand (client), React Query (admin)
- **모노레포**: Turborepo
- **패키지 매니저**: pnpm
