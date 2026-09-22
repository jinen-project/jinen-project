# World Reading Placement Log — 2026-09-22

状態: `CONTINUOUS_WORLD_READING_OPERATION = ACTIVE`  
方針: `NO_FORCED_PLACEMENT = TRUE`

この記録は、世界側で先に確認できた問題に対し、必要な最小の形を置いた事実だけを残す。各配置は、利用・採用・正しさ・影響を意味しない。

| World | Location | Generated form | Placement | Observation |
| --- | --- | --- | --- | --- |
| automatic approval reviewer の容量不足が「unacceptable risk」という否定評価として表面化するという、openのバグ報告 | [openai/codex #45395](https://github.com/openai/codex/issues/45395) | review state / risk outcome / execution gate / retryability を分ける状態モデルと、容量不足の回帰テスト条件 | [comment](https://github.com/openai/codex/issues/45395#issuecomment-5777026202) | 投稿直後。反応は未観測。`UNAVAILABLE` を `DENY` に昇格させない提案であり、実装・採用・根本原因を主張しない。 |
| 完了したtool callの結果とnative provenanceが別の時点で可視化され、freshness windowが失われるという、openのバグ報告 | [openai/codex #45641](https://github.com/openai/codex/issues/45641) | `projection_state = READY / PENDING / UNAVAILABLE` の最小契約と、`complete + empty` を中間状態として公開しない回帰fixture | [comment](https://github.com/openai/codex/issues/45641#issuecomment-5777026492) | 投稿直後。反応は未観測。provenanceの遅延・欠落を識別可能にする提案であり、修正実装や性能を主張しない。 |

## Rootとの関係

いずれも公開rootを宣伝するための配置ではない。既存の「評価不能と否定評価を分ける」「結果と根拠の結びつきを失わない」という境界を、各issueで読める最小の設計・テスト条件へ変換した。

次回以降は、上記locationにmaterialな応答・差分があった場合だけ再読する。沈黙は成功でも失敗でもない。
