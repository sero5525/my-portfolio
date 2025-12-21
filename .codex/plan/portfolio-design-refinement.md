---
name: portfolio-design-refinement
description: 幾何学モノクロでミニマムなポートフォリオへ洗練するための計画
---

# Plan

本ポートフォリオを「幾何学的な模様」「落ち着き」「モダン/現代的」「モノクロ」を軸に、ミニマムで洗練された体験へ再設計するための実装計画です。コンテンツ量が少ない前提で、空気感と余白設計を主軸に進めます。

## Requirements
- モノクロ基調を維持しつつ、幾何学模様で現代的なムードを演出
- ミニマムな情報量でも成立するレイアウトと視線誘導
- YouTube動画のみを活動履歴として強調
- モバイル/デスクトップ両対応

## Scope
- In: デザイン方針、タイポ/カラー/グリッド、各ページ情報設計、モーション、必要アセット方針
- Out: 実装、素材制作、コンテンツ確定

## Files and entry points
- src/layouts/Layout.astro
- src/pages/index.astro
- src/pages/works/index.astro
- src/pages/works/[id].astro
- src/pages/about.astro
- src/pages/contact.astro
- src/pages/404.astro

## Data model / API changes
- なし（デザイン計画のみ）

## Action items
[ ] ビジュアルコンセプトを定義（幾何学パターンの扱い、背景/余白/重なり）
[ ] タイポグラフィ設計（英日比率、階層、文字サイズ/行間、字間）
[ ] モノクロの階調パレット設計（背景/文字/アクセントの濃度整理）
[ ] レイアウト指針（余白スケール、グリッド、セクション構成）
[ ] ページ別情報設計（Home/Works/Detail/About/Contact/404）
[ ] モーション方針（ページ遷移、メニュー、セクション出現）
[ ] 必要アセット整理（ロゴ、プロフィール文、画像、YouTubeサムネ/動画）

## Testing and validation
- 主要画面幅での視認性チェック（スマホ/タブ/デスクトップ）
- 文字の可読性（コントラスト/行間/サイズ）の確認
- 作品導線（Works -> Detail -> YouTube）の迷い有無

## Risks and edge cases
- 幾何学模様が情報の邪魔になる可能性
- 情報量が少ないことで間延びする可能性
- モノクロのみだと階層が伝わりにくい可能性

## Decisions
- 幾何学模様は「線」を主軸に進める（詳細表現は後で詰める）
- ロゴは後日、画像で提供される前提で進める
