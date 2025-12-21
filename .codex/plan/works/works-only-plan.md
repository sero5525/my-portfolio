---
name: works-only-plan
description: Worksページのみを対象にした体験設計の計画
---

# Plan

本計画はWorksページのみを対象に、横方向の作品体験を洗練させるための設計書です。サイト全体や他ページは変更せず、Works一覧と詳細ページの体験に集中します。

## Overview
- 対象はWorksのみ（他ページや全体構成は変更しない）
- 作品名のみで成立するミニマムな情報設計
- 横方向の流れを主役にした体験

## Requirements
- 作品名のみ表示（追加ラベルなし）
- サムネ比率は16:9固定（YouTube自動サムネ前提）
- 横方向の流れが主役（自動＋手動のハイブリッド）
- 5件で自然ループ（見た目重視のため要素複製方式）
- Works一覧は`selected`から選ぶ（最大5件）
- モノクロで静かな印象を維持
- `Layout`側で余白を共通調整（Works側で個別調整しない）
- サムネURLは軽いサイズ（`hqdefault`）を使用
- サムネURLは `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` で生成（`youtubeId`前提）
- サムネ取得失敗時は作品名のみ表示
- `prefers-reduced-motion`時は自動進行を停止
- `Layout`側の共通余白はCSS変数で管理（`--header-height`）
- `--header-height`は`Layout.astro`に定義する

## Scope
- In: Works一覧のレイアウト/挙動/UI要素、Works詳細ページの導線整理
- Out: 他ページの変更、全体デザイン刷新

## Files and entry points
- src/pages/works/index.astro
- src/pages/works/[id].astro
- src/data/works
- src/layouts/Layout.astro

## Works experience (confirmed)
### Information
- 作品名のみ表示（追加ラベルなし）
- サムネ比率: 16:9固定
- サムネはYouTube自動サムネ前提
- サムネURLは軽いサイズ（`hqdefault`）を使用
- サムネURLは `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` で生成（`youtubeId`前提）
- サムネ取得失敗時は作品名のみ表示

### Interaction
- 横方向の流れが主役
- 自動進行: 10秒で1枚進む
- 手動操作: ドラッグ/スワイプ＋左右矢印＋左右キー
- 手動操作後は自動停止 → 一定時間で再開
- 手動後の自動再開は8秒待機
- 5件で自然ループ（見た目重視のため要素複製方式）
- 進行表示: 細線（現在位置のみ濃く）
- クリックで各作品の詳細ページへ遷移
- `prefers-reduced-motion`時は自動進行を停止
- 作品数が1件でもループする
- スナップ条件: 30%ドラッグで次へ、未満は戻る
- 高速スワイプ時は15%でも次へ

## Layout/visual direction
- サムネは大きく主役に配置（1枚が画面幅の60–75%）
- 前後のサムネを「半分だけ見せる」ことで横移動を示唆
- 作品名はサムネ近接位置に最小限で配置
- 左右矢印は小さく、線で描く
- 表示幅の目安: モバイル85% / タブレット70% / デスクトップ65%
- 前後サムネの見切れ量: 左右それぞれ15%
- 左右矢印: 画像の左右外側・縦中央、サイズ16–20px、透明度60%前後
- 進行表示: 画像の下すぐ、中央に配置

## Detail page notes
- 動画視聴に集中できる構成を維持
- 一覧に戻る導線は簡潔で目立ちすぎない
- `src/pages/works/[id].astro`の`contentPadTopClass="pt-0"`と`hideFooter={true}`は現状維持

## Action items
[ ] Works一覧の横スライドUI構成を確定（矢印/進行線の位置・サイズ）
[ ] サムネサイズと余白バランスを確定（PC/モバイル）
[ ] 自動進行と手動操作の優先順位を実装方針として整理
[ ] 詳細ページへの導線と戻り導線の見え方を整理
[ ] `Layout`側の共通余白の扱いを確定（固定ヘッダーとの関係含む、`--header-height`使用、`contentPadTopClass`は維持）
[ ] サムネURL生成ルールとフォールバック表示を設計
[ ] 自動進行の再開タイミング（8秒）を実装方針に反映
[ ] `prefers-reduced-motion`時の挙動（自動停止）を反映
[ ] スナップ条件（30%/15%）とループ条件（1件でも）を反映

## Testing and validation
- 主要画面幅での見え方確認（スマホ/タブ/デスクトップ）
- 自動進行の気づきやすさ
- 一覧 → 詳細 → 一覧の導線が迷わないか

## Acceptance criteria
- Works一覧で1枚表示が主役になり、前後サムネが左右15%見切れる
- 作品名のみ表示、サムネは16:9固定、`hqdefault`使用、失敗時は作品名のみ表示
- 自動進行は10秒間隔、手動後は8秒待機で再開
- 手動操作はドラッグ/スワイプ/矢印ボタン/左右キーで可能
- スナップ条件は30%ドラッグで次へ、速度が速い場合は15%でも次へ
- 進行表示は画像下の中央に配置、左右矢印は画像外側・縦中央で控えめに表示
- `prefers-reduced-motion`時は自動進行が停止する
- 作品数が1件でもループが成立する

## AI実装指示テンプレ
以下をそのままAIへ渡して実装を依頼する。

### 目的
Works一覧を横スライダー体験に刷新し、作品名のみのミニマムなUIで横方向の流れを主役にする。Works詳細は現行の視聴体験を維持する。

### 対象ファイル
- `src/layouts/Layout.astro`
- `src/pages/works/index.astro`
- 必要に応じて `src/styles/global.css`（共通余白のため）

### 変更方針
- Works以外のページや全体デザインは変更しない
- `Layout`側で共通余白を管理（`--header-height`をCSS変数化）
- `--header-height`は`Layout.astro`で定義する
- サムネはYouTubeの`hqdefault`を使用、取得失敗時は作品名のみ表示

### UI仕様
- 1枚表示が主役、前後サムネは左右15%見切れる
- サムネ比率は16:9固定
- 表示幅の目安: モバイル85% / タブレット70% / デスクトップ65%
- 作品名はサムネ近接位置に最小限で配置
- 矢印は画像の左右外側・縦中央、サイズ16–20px、透明度60%前後
- 進行表示は画像の下すぐ、中央に細線で表示

### 挙動仕様
- 自動進行は10秒間隔
- 手動操作はドラッグ/スワイプ/矢印ボタン/左右キー
- 手動操作後は自動進行を停止し、8秒待機で再開
- スナップ条件: 30%ドラッグで次へ、速度が速い場合は15%でも次へ
- 作品数が1件でもループが成立する（要素複製方式）
- `prefers-reduced-motion`時は自動進行を停止
- `astro:page-load`で初期化し、遷移後も動作するようにする

### 受け入れ条件
上記のAcceptance criteriaを満たすこと。

## Implementation checklist
[ ] `Layout`に`--header-height`を定義し、共通`padding-top`に反映
[ ] `--header-height`は`Layout.astro`で定義する
[ ] `contentPadTopClass`は維持し、Works以外の余白崩れを避ける
[ ] Works一覧の横スライダー骨格（外枠、overflow、見切れ量）を実装
[ ] サムネURL生成（`hqdefault`）とフォールバック表示を実装
[ ] 自動進行（10秒）と手動操作（ドラッグ/スワイプ/矢印/左右キー）を実装
[ ] 手動後8秒待機で自動再開する制御を実装
[ ] ループ条件（1件でもループ）を要素複製方式で実装
[ ] 進行表示（細線）と矢印UIの位置/サイズ/不透明度を実装
[ ] スナップ条件（30%/高速15%）を実装
[ ] `prefers-reduced-motion`時の自動停止を実装
[ ] Astroの遷移後も初期化されるよう`astro:page-load`でバインド

## Risks and edge cases
- 作品数が少ないとループ感が強くなる
- 自動進行が気づかれにくい可能性

## Open questions
- なし（主要方針は確定済み）
