export type Work = {
  id: string;
  title: string;
  youtubeId: string;
  selected?: boolean; // ★追加
};

export const works: Work[] = [
  { id: "x006", title: "曲名A", youtubeId: "AAAAAAAAAAA", selected: true },
  { id: "x005", title: "曲名B", youtubeId: "BBBBBBBBBBB", selected: true },
  { id: "x004", title: "曲名C", youtubeId: "CCCCCCCCCCC", selected: true },
  { id: "x003", title: "曲名D", youtubeId: "DDDDDDDDDDD", selected: true },
  { id: "x002", title: "曲名E", youtubeId: "EEEEEEEEEEE", selected: true },

  // ここから下は selected を付けなければ一覧に出ない（保管）
  { id: "x001", title: "曲名F", youtubeId: "FFFFFFFFFFF" },
];
