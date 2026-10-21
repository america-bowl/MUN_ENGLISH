// Injected Data
const ALL_WORDS = [
    /* 1 */ { "en": "Rostrum", "ja": "演壇・議長席", "category": "Procedure" },
    /* 2 */ { "en": "Bureau", "ja": "議長団", "category": "Procedure" },
    /* 3 */ { "en": "Gavel", "ja": "議長槌", "category": "Procedure" },
    /* 4 */ { "en": "Roll Call", "ja": "点呼", "category": "Procedure" },
    /* 5 */ { "en": "Present and Voting", "ja": "出席かつ投票（棄権不可）", "category": "Procedure" },
    /* 6 */ { "en": "Quorum", "ja": "定足数", "category": "Procedure" },
    /* 7 */ { "en": "Right of Reply", "ja": "反論権", "category": "Procedure" },
    /* 8 */ { "en": "Decorum", "ja": "秩序・静粛", "category": "Procedure" },
    /* 9 */ { "en": "Yield the floor", "ja": "発言権を譲る", "category": "Procedure" },
    /* 10 */ { "en": "Point of Order", "ja": "議事進行に関する動議（ルール違反）", "category": "Procedure" },
    /* 11 */ { "en": "Point of Personal Privilege", "ja": "個人特権の不服（環境に対する要望）", "category": "Procedure" },
    /* 12 */ { "en": "Point of Parliamentary Inquiry", "ja": "議事進行に関する質問", "category": "Procedure" },
    /* 13 */ { "en": "Point of Information", "ja": "発言者への質問", "category": "Procedure" },
    /* 14 */ { "en": "Moderated Caucus", "ja": "着席型討議", "category": "Procedure" },
    /* 15 */ { "en": "Unmoderated Caucus", "ja": "自由討議", "category": "Procedure" },
    /* 16 */ { "en": "Adjournment", "ja": "閉会", "category": "Procedure" },
    /* 17 */ { "en": "Suspension of the meeting", "ja": "一時休会", "category": "Procedure" },
    /* 18 */ { "en": "Table the topic", "ja": "議題の棚上げ", "category": "Procedure" },
    /* 19 */ { "en": "Closure of debate", "ja": "討論の終結", "category": "Procedure" },
    /* 20 */ { "en": "Divide the question", "ja": "分割採決", "category": "Procedure" },
    /* 21 */ { "en": "Roll call vote", "ja": "指名投票", "category": "Procedure" },
    /* 22 */ { "en": "Abstention", "ja": "棄権", "category": "Procedure" },
    /* 23 */ { "en": "Veto power", "ja": "拒否権", "category": "Procedure" },
    /* 24 */ { "en": "Unanimous consent", "ja": "全会一致の合意", "category": "Procedure" },
    /* 25 */ { "en": "Simple majority", "ja": "単純過半数", "category": "Procedure" },
    /* 26 */ { "en": "Two-thirds majority", "ja": "3分の2の絶対多数", "category": "Procedure" },
    /* 27 */ { "en": "Substantive voting", "ja": "実質事項の投票", "category": "Procedure" },
    /* 28 */ { "en": "Procedural voting", "ja": "手続き事項の投票", "category": "Procedure" },
    /* 29 */ { "en": "Plenary session", "ja": "本会議", "category": "Procedure" },
    /* 30 */ { "en": "Agenda", "ja": "議題", "category": "Procedure" },
    /* 31 */ { "en": "Placard", "ja": "国名札", "category": "Procedure" },
    /* 32 */ { "en": "Sponsor", "ja": "主提案国", "category": "Procedure" },
    /* 33 */ { "en": "Signatory", "ja": "署名国", "category": "Procedure" },
    /* 34 */ { "en": "Working Paper", "ja": "作業文書", "category": "Procedure" },
    /* 35 */ { "en": "Draft Resolution", "ja": "決議案", "category": "Procedure" },
    /* 36 */ { "en": "Amendment", "ja": "修正案", "category": "Procedure" },
    /* 37 */ { "en": "Friendly Amendment", "ja": "友好修正案", "category": "Procedure" },
    /* 38 */ { "en": "Unfriendly Amendment", "ja": "非友好修正案", "category": "Procedure" },
    /* 39 */ { "en": "Position Paper", "ja": "政策方針書", "category": "Procedure" },
    /* 40 */ { "en": "Dais", "ja": "議長席・ひな壇", "category": "Procedure" },
    /* 41 */ { "en": "Chairperson", "ja": "議長", "category": "Procedure" },
    /* 42 */ { "en": "Rapporteur", "ja": "書記・報告者", "category": "Procedure" },
    /* 43 */ { "en": "Delegate", "ja": "代表・大使", "category": "Procedure" },
    /* 44 */ { "en": "Delegation", "ja": "代表団", "category": "Procedure" },
    /* 45 */ { "en": "Observer State", "ja": "オブザーバー国家", "category": "Procedure" },
    /* 46 */ { "en": "NGO Representative", "ja": "NGO代表", "category": "Procedure" },
    /* 47 */ { "en": "Secretariat", "ja": "事務局", "category": "Procedure" },
    /* 48 */ { "en": "Secretary-General", "ja": "事務総長", "category": "Procedure" },
    /* 49 */ { "en": "Resolution", "ja": "決議", "category": "Procedure" },
    /* 50 */ { "en": "Consensus", "ja": "コンセンサス・全会一致", "category": "Procedure" },
    /* 51 */ { "en": "Adoption by acclamation", "ja": "拍手による採択", "category": "Procedure" },
    /* 52 */ { "en": "Motion to extend", "ja": "延長の動議", "category": "Procedure" },
    /* 53 */ { "en": "Speaking time", "ja": "発言時間", "category": "Procedure" },
    /* 54 */ { "en": "Speakers' list", "ja": "発言者リスト", "category": "Procedure" },
    /* 55 */ { "en": "Floor", "ja": "発言権", "category": "Procedure" },
    /* 56 */ { "en": "Recognize", "ja": "（議長が）発言を許可する", "category": "Procedure" },
    /* 57 */ { "en": "Out of order", "ja": "規則違反の", "category": "Procedure" },
    /* 58 */ { "en": "In order", "ja": "規則に適した", "category": "Procedure" },
    /* 59 */ { "en": "Appeal the Chair's decision", "ja": "議長の裁定への異議", "category": "Procedure" },
    /* 60 */ { "en": "Reconsideration", "ja": "再審議", "category": "Procedure" },
    /* 61 */ { "en": "Limit debate", "ja": "討論の制限", "category": "Procedure" },
    /* 62 */ { "en": "Postpone debate", "ja": "討論の延期", "category": "Procedure" },
    /* 63 */ { "en": "Resume debate", "ja": "討論の再開", "category": "Procedure" },
    /* 64 */ { "en": "Competence", "ja": "権限（管轄権）", "category": "Procedure" },
    /* 65 */ { "en": "Explanatory memorandum", "ja": "説明覚書", "category": "Procedure" },
    /* 66 */ { "en": "Voting bloc", "ja": "投票ブロック", "category": "Procedure" },
    /* 67 */ { "en": "Caucusing block", "ja": "コーカス（討議）ブロック", "category": "Procedure" },
    /* 68 */ { "en": "Drafting group", "ja": "起草グループ", "category": "Procedure" },
    /* 69 */ { "en": "Merge", "ja": "（決議案を）統合する", "category": "Procedure" },
    /* 70 */ { "en": "Withdraw", "ja": "撤回する", "category": "Procedure" },
    /* 71 */ { "en": "Reintroduce", "ja": "再提出する", "category": "Procedure" },
    /* 72 */ { "en": "Binding", "ja": "法的拘束力のある", "category": "Procedure" },
    /* 73 */ { "en": "Non-binding", "ja": "法的拘束力のない", "category": "Procedure" },
    /* 74 */ { "en": "Ratification", "ja": "批准", "category": "Procedure" },
    /* 75 */ { "en": "Accession", "ja": "加入（条約への）", "category": "Procedure" },
    /* 76 */ { "en": "Reservation", "ja": "留保", "category": "Procedure" },
    /* 77 */ { "en": "Derogation", "ja": "一部免除・逸脱", "category": "Procedure" },
    /* 78 */ { "en": "Protocol", "ja": "議定書・外交儀礼", "category": "Procedure" },
    /* 79 */ { "en": "Affirming", "ja": "確認しつつ", "category": "Preambulatory Clauses" },
    /* 80 */ { "en": "Alarmed by", "ja": "懸念しつつ", "category": "Preambulatory Clauses" },
    /* 81 */ { "en": "Approving", "ja": "承認しつつ", "category": "Preambulatory Clauses" },
    /* 82 */ { "en": "Aware of", "ja": "認識しつつ", "category": "Preambulatory Clauses" },
    /* 83 */ { "en": "Bearing in mind", "ja": "心に留めつつ", "category": "Preambulatory Clauses" },
    /* 84 */ { "en": "Believing", "ja": "信じつつ", "category": "Preambulatory Clauses" },
    /* 85 */ { "en": "Cognizant of", "ja": "察知しつつ", "category": "Preambulatory Clauses" },
    /* 86 */ { "en": "Confident", "ja": "確信しつつ", "category": "Preambulatory Clauses" },
    /* 87 */ { "en": "Contemplating", "ja": "熟考しつつ", "category": "Preambulatory Clauses" },
    /* 88 */ { "en": "Convinced", "ja": "確信しつつ", "category": "Preambulatory Clauses" },
    /* 89 */ { "en": "Declaring", "ja": "宣言しつつ", "category": "Preambulatory Clauses" },
    /* 90 */ { "en": "Deeply concerned", "ja": "深く懸念しつつ", "category": "Preambulatory Clauses" },
    /* 91 */ { "en": "Deeply conscious", "ja": "深く自覚しつつ", "category": "Preambulatory Clauses" },
    /* 92 */ { "en": "Deeply convinced", "ja": "深く確信しつつ", "category": "Preambulatory Clauses" },
    /* 93 */ { "en": "Deeply disturbed", "ja": "深く動揺しつつ", "category": "Preambulatory Clauses" },
    /* 94 */ { "en": "Deeply regretting", "ja": "深く遺憾に思いつつ", "category": "Preambulatory Clauses" },
    /* 95 */ { "en": "Deploring", "ja": "非難しつつ・遺憾に思いつつ", "category": "Preambulatory Clauses" },
    /* 96 */ { "en": "Desiring", "ja": "望みつつ", "category": "Preambulatory Clauses" },
    /* 97 */ { "en": "Emphasizing", "ja": "強調しつつ", "category": "Preambulatory Clauses" },
    /* 98 */ { "en": "Expecting", "ja": "期待しつつ", "category": "Preambulatory Clauses" },
    /* 99 */ { "en": "Expressing its appreciation", "ja": "感謝を表明しつつ", "category": "Preambulatory Clauses" },
    /* 100 */ { "en": "Expressing its satisfaction", "ja": "満足を表明しつつ", "category": "Preambulatory Clauses" },
    /* 101 */ { "en": "Fulfilling", "ja": "履行しつつ", "category": "Preambulatory Clauses" },
    /* 102 */ { "en": "Fully alarmed", "ja": "十分に警戒しつつ", "category": "Preambulatory Clauses" },
    /* 103 */ { "en": "Fully aware", "ja": "十分に認識しつつ", "category": "Preambulatory Clauses" },
    /* 104 */ { "en": "Fully believing", "ja": "十分に信じつつ", "category": "Preambulatory Clauses" },
    /* 105 */ { "en": "Further deploring", "ja": "さらに遺憾に思いつつ", "category": "Preambulatory Clauses" },
    /* 106 */ { "en": "Further recalling", "ja": "さらに想起しつつ", "category": "Preambulatory Clauses" },
    /* 107 */ { "en": "Guided by", "ja": "導かれつつ", "category": "Preambulatory Clauses" },
    /* 108 */ { "en": "Having adopted", "ja": "採択したうえで", "category": "Preambulatory Clauses" },
    /* 109 */ { "en": "Having considered", "ja": "考慮したうえで", "category": "Preambulatory Clauses" },
    /* 110 */ { "en": "Having examined", "ja": "検討したうえで", "category": "Preambulatory Clauses" },
    /* 111 */ { "en": "Having received", "ja": "受け取ったうえで", "category": "Preambulatory Clauses" },
    /* 112 */ { "en": "Keeping in mind", "ja": "留意しつつ", "category": "Preambulatory Clauses" },
    /* 113 */ { "en": "Noting with deep concern", "ja": "深い懸念をもって留意しつつ", "category": "Preambulatory Clauses" },
    /* 114 */ { "en": "Noting with satisfaction", "ja": "満足をもって留意しつつ", "category": "Preambulatory Clauses" },
    /* 115 */ { "en": "Noting further", "ja": "さらに留意しつつ", "category": "Preambulatory Clauses" },
    /* 116 */ { "en": "Observing", "ja": "観察しつつ", "category": "Preambulatory Clauses" },
    /* 117 */ { "en": "Reaffirming", "ja": "再確認しつつ", "category": "Preambulatory Clauses" },
    /* 118 */ { "en": "Realizing", "ja": "悟りつつ", "category": "Preambulatory Clauses" },
    /* 119 */ { "en": "Recalling", "ja": "想起しつつ", "category": "Preambulatory Clauses" },
    /* 120 */ { "en": "Recognizing", "ja": "認識しつつ", "category": "Preambulatory Clauses" },
    /* 121 */ { "en": "Referring", "ja": "言及しつつ", "category": "Preambulatory Clauses" },
    /* 122 */ { "en": "Seeking", "ja": "模索しつつ", "category": "Preambulatory Clauses" },
    /* 123 */ { "en": "Taking into account", "ja": "考慮に入れつつ", "category": "Preambulatory Clauses" },
    /* 124 */ { "en": "Taking note of", "ja": "留意しつつ", "category": "Preambulatory Clauses" },
    /* 125 */ { "en": "Viewing with appreciation", "ja": "評価しつつ見守りながら", "category": "Preambulatory Clauses" },
    /* 126 */ { "en": "Welcoming", "ja": "歓迎しつつ", "category": "Preambulatory Clauses" },
    /* 127 */ { "en": "Accepts", "ja": "受諾する", "category": "Operative Clauses" },
    /* 128 */ { "en": "Affirms", "ja": "確認する", "category": "Operative Clauses" },
    /* 129 */ { "en": "Approves", "ja": "承認する", "category": "Operative Clauses" },
    /* 130 */ { "en": "Authorizes", "ja": "権限を与える", "category": "Operative Clauses" },
    /* 131 */ { "en": "Calls upon", "ja": "要請する", "category": "Operative Clauses" },
    /* 132 */ { "en": "Condemns", "ja": "非難する", "category": "Operative Clauses" },
    /* 133 */ { "en": "Congratulates", "ja": "祝賀する", "category": "Operative Clauses" },
    /* 134 */ { "en": "Confirms", "ja": "確認する", "category": "Operative Clauses" },
    /* 135 */ { "en": "Considers", "ja": "考慮する", "category": "Operative Clauses" },
    /* 136 */ { "en": "Decides", "ja": "決定する", "category": "Operative Clauses" },
    /* 137 */ { "en": "Declares", "ja": "宣言する", "category": "Operative Clauses" },
    /* 138 */ { "en": "Deplores", "ja": "遺憾に思う", "category": "Operative Clauses" },
    /* 139 */ { "en": "Designates", "ja": "指定する", "category": "Operative Clauses" },
    /* 140 */ { "en": "Draws the attention", "ja": "注意を喚起する", "category": "Operative Clauses" },
    /* 141 */ { "en": "Emphasizes", "ja": "強調する", "category": "Operative Clauses" },
    /* 142 */ { "en": "Encourages", "ja": "奨励する", "category": "Operative Clauses" },
    /* 143 */ { "en": "Endorses", "ja": "支持・承認する", "category": "Operative Clauses" },
    /* 144 */ { "en": "Expresses its appreciation", "ja": "感謝を表明する", "category": "Operative Clauses" },
    /* 145 */ { "en": "Expresses its hope", "ja": "希望を表明する", "category": "Operative Clauses" },
    /* 146 */ { "en": "Further invites", "ja": "さらに要請する", "category": "Operative Clauses" },
    /* 147 */ { "en": "Further proclaims", "ja": "さらに宣言する", "category": "Operative Clauses" },
    /* 148 */ { "en": "Further recommends", "ja": "さらに勧告する", "category": "Operative Clauses" },
    /* 149 */ { "en": "Further requests", "ja": "さらに要請する", "category": "Operative Clauses" },
    /* 150 */ { "en": "Further resolves", "ja": "さらに決議する", "category": "Operative Clauses" },
    /* 151 */ { "en": "Has resolved", "ja": "決議した", "category": "Operative Clauses" },
    /* 152 */ { "en": "Invites", "ja": "要請する（招待する）", "category": "Operative Clauses" },
    /* 153 */ { "en": "Notes", "ja": "留意する", "category": "Operative Clauses" },
    /* 154 */ { "en": "Proclaims", "ja": "宣言する", "category": "Operative Clauses" },
    /* 155 */ { "en": "Reaffirms", "ja": "再確認する", "category": "Operative Clauses" },
    /* 156 */ { "en": "Recommends", "ja": "勧告する", "category": "Operative Clauses" },
    /* 157 */ { "en": "Regrets", "ja": "遺憾に思う", "category": "Operative Clauses" },
    /* 158 */ { "en": "Reminds", "ja": "喚起する", "category": "Operative Clauses" },
    /* 159 */ { "en": "Requests", "ja": "要請する", "category": "Operative Clauses" },
    /* 160 */ { "en": "Resolves", "ja": "決議する", "category": "Operative Clauses" },
    /* 161 */ { "en": "Solemnly affirms", "ja": "厳粛に確認する", "category": "Operative Clauses" },
    /* 162 */ { "en": "Strongly condemns", "ja": "強く非難する", "category": "Operative Clauses" },
    /* 163 */ { "en": "Supports", "ja": "支持する", "category": "Operative Clauses" },
    /* 164 */ { "en": "Takes note of", "ja": "留意する", "category": "Operative Clauses" },
    /* 165 */ { "en": "Transmits", "ja": "伝達する", "category": "Operative Clauses" },
    /* 166 */ { "en": "Urges", "ja": "強く促す", "category": "Operative Clauses" },
    /* 167 */ { "en": "Welcomes", "ja": "歓迎する", "category": "Operative Clauses" },
    /* 168 */ { "en": "Instructs", "ja": "指示する", "category": "Operative Clauses" },
    /* 169 */ { "en": "Appeals", "ja": "訴える", "category": "Operative Clauses" },
    /* 170 */ { "en": "Trusts", "ja": "信託する・確信する", "category": "Operative Clauses" },
    /* 171 */ { "en": "Commends", "ja": "称賛する", "category": "Operative Clauses" },
    /* 172 */ { "en": "Demands", "ja": "要求する（安保理などで使用）", "category": "Operative Clauses" },
    /* 173 */ { "en": "Urgency", "ja": "緊急性", "category": "Speeches & Rhetoric" },
    /* 174 */ { "en": "Imperative", "ja": "不可避の・急務の", "category": "Speeches & Rhetoric" },
    /* 175 */ { "en": "Paramount", "ja": "最高の・最重要の", "category": "Speeches & Rhetoric" },
    /* 176 */ { "en": "Crucial", "ja": "決定的な", "category": "Speeches & Rhetoric" },
    /* 177 */ { "en": "Constructive", "ja": "建設的な", "category": "Speeches & Rhetoric" },
    /* 178 */ { "en": "Comprehensive", "ja": "包括的な", "category": "Speeches & Rhetoric" },
    /* 179 */ { "en": "Holistic approach", "ja": "全体論的アプローチ", "category": "Speeches & Rhetoric" },
    /* 180 */ { "en": "Pragmatic", "ja": "実用的な", "category": "Speeches & Rhetoric" },
    /* 181 */ { "en": "Feasible", "ja": "実行可能な", "category": "Speeches & Rhetoric" },
    /* 182 */ { "en": "Viable", "ja": "存続可能な・実行可能な", "category": "Speeches & Rhetoric" },
    /* 183 */ { "en": "Tangible results", "ja": "具体的な成果", "category": "Speeches & Rhetoric" },
    /* 184 */ { "en": "Substantive", "ja": "実質的な", "category": "Speeches & Rhetoric" },
    /* 185 */ { "en": "Unprecedented", "ja": "前例のない", "category": "Speeches & Rhetoric" },
    /* 186 */ { "en": "Systemic issue", "ja": "構造的問題", "category": "Speeches & Rhetoric" },
    /* 187 */ { "en": "Interconnected", "ja": "相互に関連した", "category": "Speeches & Rhetoric" },
    /* 188 */ { "en": "Multifaceted", "ja": "多面的な", "category": "Speeches & Rhetoric" },
    /* 189 */ { "en": "Proactive", "ja": "積極的な", "category": "Speeches & Rhetoric" },
    /* 190 */ { "en": "Reactive", "ja": "受動的な", "category": "Speeches & Rhetoric" },
    /* 191 */ { "en": "To tackle", "ja": "（問題に）取り組む", "category": "Speeches & Rhetoric" },
    /* 192 */ { "en": "To address", "ja": "対処する", "category": "Speeches & Rhetoric" },
    /* 193 */ { "en": "To mitigate", "ja": "和らげる・軽減する", "category": "Speeches & Rhetoric" },
    /* 194 */ { "en": "To alleviate", "ja": "軽減する", "category": "Speeches & Rhetoric" },
    /* 195 */ { "en": "To facilitate", "ja": "促進する", "category": "Speeches & Rhetoric" },
    /* 196 */ { "en": "To foster", "ja": "育成する・促進する", "category": "Speeches & Rhetoric" },
    /* 197 */ { "en": "To bolster", "ja": "強化する", "category": "Speeches & Rhetoric" },
    /* 198 */ { "en": "To hinder", "ja": "妨げる", "category": "Speeches & Rhetoric" },
    /* 199 */ { "en": "To jeopardize", "ja": "危険にさらす", "category": "Speeches & Rhetoric" },
    /* 200 */ { "en": "To undermine", "ja": "損なう", "category": "Speeches & Rhetoric" },
    /* 201 */ { "en": "To underscore", "ja": "強調する", "category": "Speeches & Rhetoric" },
    /* 202 */ { "en": "To reiterate", "ja": "繰り返す・反復する", "category": "Speeches & Rhetoric" },
    /* 203 */ { "en": "To advocate", "ja": "提唱する", "category": "Speeches & Rhetoric" },
    /* 204 */ { "en": "Stance", "ja": "立場", "category": "Speeches & Rhetoric" },
    /* 205 */ { "en": "Perspective", "ja": "観点", "category": "Speeches & Rhetoric" },
    /* 206 */ { "en": "Framework", "ja": "枠組み", "category": "Speeches & Rhetoric" },
    /* 207 */ { "en": "Mechanism", "ja": "仕組み・制度", "category": "Speeches & Rhetoric" },
    /* 208 */ { "en": "Initiative", "ja": "構想・主導権", "category": "Speeches & Rhetoric" },
    /* 209 */ { "en": "Common ground", "ja": "共通の基盤・妥協点", "category": "Speeches & Rhetoric" },
    /* 210 */ { "en": "Stumbling block", "ja": "障害物", "category": "Speeches & Rhetoric" },
    /* 211 */ { "en": "Red line", "ja": "譲れない一線", "category": "Speeches & Rhetoric" },
    /* 212 */ { "en": "Incentive", "ja": "動機付け", "category": "Speeches & Rhetoric" },
    /* 213 */ { "en": "Mutual trust", "ja": "相互信頼", "category": "Speeches & Rhetoric" },
    /* 214 */ { "en": "Solidarity", "ja": "連帯", "category": "Speeches & Rhetoric" },
    /* 215 */ { "en": "Inaction", "ja": "無策", "category": "Speeches & Rhetoric" },
    /* 216 */ { "en": "Catalyst", "ja": "触媒・きっかけ", "category": "Speeches & Rhetoric" },
    /* 217 */ { "en": "Status quo", "ja": "現状", "category": "Speeches & Rhetoric" },
    /* 218 */ { "en": "Paradigm shift", "ja": "劇的な方針転換", "category": "Speeches & Rhetoric" },
    /* 219 */ { "en": "Stakeholder", "ja": "利害関係者", "category": "Speeches & Rhetoric" },
    /* 220 */ { "en": "Concerted effort", "ja": "一致協力した努力", "category": "Speeches & Rhetoric" },
    /* 221 */ { "en": "At a crossroads", "ja": "岐路に立って", "category": "Speeches & Rhetoric" },
    /* 222 */ { "en": "Grave concern", "ja": "重大な懸念", "category": "Speeches & Rhetoric" },
    /* 223 */ { "en": "Vehemently oppose", "ja": "強硬に反対する", "category": "Speeches & Rhetoric" },
    /* 224 */ { "en": "Unwavering commitment", "ja": "揺るぎない公約", "category": "Speeches & Rhetoric" },
    /* 225 */ { "en": "To bridge the gap", "ja": "隔たりを埋める", "category": "Speeches & Rhetoric" },
    /* 226 */ { "en": "Dichotomy", "ja": "二項対立", "category": "Speeches & Rhetoric" },
    /* 227 */ { "en": "To pave the way", "ja": "道を開く", "category": "Speeches & Rhetoric" },
    /* 228 */ { "en": "Vanguard", "ja": "先駆者", "category": "Speeches & Rhetoric" },
    /* 229 */ { "en": "To turn a blind eye", "ja": "見て見ぬふりをする", "category": "Speeches & Rhetoric" },
    /* 230 */ { "en": "A beacon of hope", "ja": "希望の光", "category": "Speeches & Rhetoric" },
    /* 231 */ { "en": "To bear the brunt", "ja": "矢面に立つ", "category": "Speeches & Rhetoric" },
    /* 232 */ { "en": "Unequivocal", "ja": "明白な", "category": "Speeches & Rhetoric" },
    /* 233 */ { "en": "To ring the alarm", "ja": "警鐘を鳴らす", "category": "Speeches & Rhetoric" },
    /* 234 */ { "en": "Lip service", "ja": "口先だけの約束", "category": "Speeches & Rhetoric" },
    /* 235 */ { "en": "To drag one's feet", "ja": "意図的に遅らせる", "category": "Speeches & Rhetoric" },
    /* 236 */ { "en": "Zero-sum game", "ja": "ゼロサムゲーム", "category": "Speeches & Rhetoric" },
    /* 237 */ { "en": "Win-win situation", "ja": "双方に利益のある状況", "category": "Speeches & Rhetoric" },
    /* 238 */ { "en": "To hold accountable", "ja": "責任を問う", "category": "Speeches & Rhetoric" },
    /* 239 */ { "en": "To lay the groundwork", "ja": "基礎を固める", "category": "Speeches & Rhetoric" },
    /* 240 */ { "en": "To pool resources", "ja": "資源を出し合う", "category": "Speeches & Rhetoric" },
    /* 241 */ { "en": "Sovereignty", "ja": "主権", "category": "International Law" },
    /* 242 */ { "en": "Territorial Integrity", "ja": "領土保全", "category": "International Law" },
    /* 243 */ { "en": "Non-interference", "ja": "内政不干渉", "category": "International Law" },
    /* 244 */ { "en": "Jurisdiction", "ja": "管轄権", "category": "International Law" },
    /* 245 */ { "en": "Bilateral", "ja": "二国間の", "category": "International Law" },
    /* 246 */ { "en": "Multilateral", "ja": "多国間の", "category": "International Law" },
    /* 247 */ { "en": "Treaty", "ja": "条約", "category": "International Law" },
    /* 248 */ { "en": "Convention", "ja": "協定・条約", "category": "International Law" },
    /* 249 */ { "en": "Charter", "ja": "憲章", "category": "International Law" },
    /* 250 */ { "en": "Declaration", "ja": "宣言", "category": "International Law" },
    /* 251 */ { "en": "State Party", "ja": "締約国", "category": "International Law" },
    /* 252 */ { "en": "Non-state Actor", "ja": "非国家主体", "category": "International Law" },
    /* 253 */ { "en": "Diplomatic immunity", "ja": "外交特権", "category": "International Law" },
    /* 254 */ { "en": "Persona non grata", "ja": "ペルソナ・ノン・グラータ（好ましくない人物）", "category": "International Law" },
    /* 255 */ { "en": "Extradition", "ja": "犯罪人引き渡し", "category": "International Law" },
    /* 256 */ { "en": "Customary international law", "ja": "国際慣習法", "category": "International Law" },
    /* 257 */ { "en": "Jus cogens", "ja": "強行規範", "category": "International Law" },
    /* 258 */ { "en": "Pacta sunt servanda", "ja": "合意は拘束する", "category": "International Law" },
    /* 259 */ { "en": "Casus belli", "ja": "開戦事由", "category": "International Law" },
    /* 260 */ { "en": "De facto", "ja": "事実上の", "category": "International Law" },
    /* 261 */ { "en": "De jure", "ja": "法律上の", "category": "International Law" },
    /* 262 */ { "en": "Ad hoc", "ja": "臨時の", "category": "International Law" },
    /* 263 */ { "en": "Tribunal", "ja": "法廷・裁判所", "category": "International Law" },
    /* 264 */ { "en": "Arbitration", "ja": "仲裁", "category": "International Law" },
    /* 265 */ { "en": "Adjudication", "ja": "司法判断", "category": "International Law" },
    /* 266 */ { "en": "Mediation", "ja": "調停", "category": "International Law" },
    /* 267 */ { "en": "Good offices", "ja": "周旋", "category": "International Law" },
    /* 268 */ { "en": "Jurisprudence", "ja": "法理学・判例", "category": "International Law" },
    /* 269 */ { "en": "Reparations", "ja": "賠償", "category": "International Law" },
    /* 270 */ { "en": "Amnesty", "ja": "恩赦", "category": "International Law" },
    /* 271 */ { "en": "Statute", "ja": "法令・規程", "category": "International Law" },
    /* 272 */ { "en": "Derogation", "ja": "一部免除", "category": "International Law" },
    /* 273 */ { "en": "Universal jurisdiction", "ja": "普遍的管轄権", "category": "International Law" },
    /* 274 */ { "en": "Self-determination", "ja": "民族自決", "category": "International Law" },
    /* 275 */ { "en": "Belligerent", "ja": "交戦国", "category": "International Law" },
    /* 276 */ { "en": "Rule of law", "ja": "法の支配", "category": "International Law" },
    /* 277 */ { "en": "Habeas corpus", "ja": "人身保護令状", "category": "International Law" },
    /* 278 */ { "en": "Geneva Conventions", "ja": "ジュネーブ条約", "category": "International Law" },
    /* 279 */ { "en": "Rome Statute", "ja": "ローマ規程（ICC）", "category": "International Law" },
    /* 280 */ { "en": "UNCLOS", "ja": "国連海洋法条約", "category": "International Law" },
    /* 281 */ { "en": "Exclusive Economic Zone (EEZ)", "ja": "排他的経済水域", "category": "International Law" },
    /* 282 */ { "en": "High seas", "ja": "公海", "category": "International Law" },
    /* 283 */ { "en": "Innocent passage", "ja": "無害通航権", "category": "International Law" },
    /* 284 */ { "en": "Intellectual Property Rights", "ja": "知的財産権", "category": "International Law" },
    /* 285 */ { "en": "TRIPS Agreement", "ja": "知的所有権の貿易関連の側面に関する協定", "category": "International Law" },
    /* 286 */ { "en": "Embargo", "ja": "通商禁止", "category": "International Law" },
    /* 287 */ { "en": "Sanctions", "ja": "制裁", "category": "International Law" },
    /* 288 */ { "en": "Veto", "ja": "拒否権", "category": "International Law" },
    /* 289 */ { "en": "Asylum", "ja": "庇護", "category": "International Law" },
    /* 290 */ { "en": "Refoulement", "ja": "追放・送還", "category": "International Law" },
    /* 291 */ { "en": "Non-refoulement", "ja": "ノン・ルフールマン原則", "category": "International Law" },
    /* 292 */ { "en": "Statelessness", "ja": "無国籍状態", "category": "International Law" },
    /* 293 */ { "en": "Dual citizenship", "ja": "二重国籍", "category": "International Law" },
    /* 294 */ { "en": "Visa free regime", "ja": "ビザ免除措置", "category": "International Law" },
    /* 295 */ { "en": "Consular access", "ja": "領事面会権", "category": "International Law" },
    /* 296 */ { "en": "Extraterritoriality", "ja": "治外法権", "category": "International Law" },
    /* 297 */ { "en": "Diplomatic pouch", "ja": "外交行嚢", "category": "International Law" },
    /* 298 */ { "en": "Credentials", "ja": "信任状", "category": "International Law" },
    /* 299 */ { "en": "Disarmament", "ja": "軍縮", "category": "Security & Conflict" },
    /* 300 */ { "en": "Demilitarization", "ja": "非軍事化", "category": "Security & Conflict" },
    /* 301 */ { "en": "Proliferation", "ja": "拡散", "category": "Security & Conflict" },
    /* 302 */ { "en": "Non-proliferation", "ja": "不拡散", "category": "Security & Conflict" },
    /* 303 */ { "en": "Weapons of Mass Destruction (WMD)", "ja": "大量破壊兵器", "category": "Security & Conflict" },
    /* 304 */ { "en": "Nuclear deterrence", "ja": "核抑止", "category": "Security & Conflict" },
    /* 305 */ { "en": "Ballistic missile", "ja": "弾道ミサイル", "category": "Security & Conflict" },
    /* 306 */ { "en": "Conventional weapons", "ja": "通常兵器", "category": "Security & Conflict" },
    /* 307 */ { "en": "Small arms and light weapons (SALW)", "ja": "小型武器", "category": "Security & Conflict" },
    /* 308 */ { "en": "Ceasefire", "ja": "停戦", "category": "Security & Conflict" },
    /* 309 */ { "en": "Truce", "ja": "休戦", "category": "Security & Conflict" },
    /* 310 */ { "en": "Armistice", "ja": "休戦協定", "category": "Security & Conflict" },
    /* 311 */ { "en": "Hostilities", "ja": "敵対行為", "category": "Security & Conflict" },
    /* 312 */ { "en": "Aggression", "ja": "侵略", "category": "Security & Conflict" },
    /* 313 */ { "en": "Incursion", "ja": "侵入", "category": "Security & Conflict" },
    /* 314 */ { "en": "Insurgency", "ja": "反乱・暴動", "category": "Security & Conflict" },
    /* 315 */ { "en": "Counter-terrorism", "ja": "対テロリズム", "category": "Security & Conflict" },
    /* 316 */ { "en": "Extremism", "ja": "過激主義", "category": "Security & Conflict" },
    /* 317 */ { "en": "Radicalization", "ja": "過激化", "category": "Security & Conflict" },
    /* 318 */ { "en": "Peacekeeping Operations (PKO)", "ja": "平和維持活動", "category": "Security & Conflict" },
    /* 319 */ { "en": "Peacebuilding", "ja": "平和構築", "category": "Security & Conflict" },
    /* 320 */ { "en": "Peacemaking", "ja": "平和創造", "category": "Security & Conflict" },
    /* 321 */ { "en": "Rules of Engagement (ROE)", "ja": "交戦規定", "category": "Security & Conflict" },
    /* 322 */ { "en": "Collateral damage", "ja": "巻き添え被害", "category": "Security & Conflict" },
    /* 323 */ { "en": "Militia", "ja": "民兵", "category": "Security & Conflict" },
    /* 324 */ { "en": "Paramilitary", "ja": "準軍事組織", "category": "Security & Conflict" },
    /* 325 */ { "en": "Mercenary", "ja": "傭兵", "category": "Security & Conflict" },
    /* 326 */ { "en": "Guerrilla warfare", "ja": "ゲリラ戦", "category": "Security & Conflict" },
    /* 327 */ { "en": "Asymmetric warfare", "ja": "非対称戦", "category": "Security & Conflict" },
    /* 328 */ { "en": "Proxy war", "ja": "代理戦争", "category": "Security & Conflict" },
    /* 329 */ { "en": "Civil war", "ja": "内戦", "category": "Security & Conflict" },
    /* 330 */ { "en": "Atrocity crimes", "ja": "残虐犯罪", "category": "Security & Conflict" },
    /* 331 */ { "en": "Genocide", "ja": "ジェノサイド・集団殺害", "category": "Security & Conflict" },
    /* 332 */ { "en": "War crimes", "ja": "戦争犯罪", "category": "Security & Conflict" },
    /* 333 */ { "en": "Crimes against humanity", "ja": "人道に対する罪", "category": "Security & Conflict" },
    /* 334 */ { "en": "Ethnic cleansing", "ja": "民族浄化", "category": "Security & Conflict" },
    /* 335 */ { "en": "Impunity", "ja": "不処罰", "category": "Security & Conflict" },
    /* 336 */ { "en": "Reconciliation", "ja": "和解", "category": "Security & Conflict" },
    /* 337 */ { "en": "Buffer zone", "ja": "緩衝地帯", "category": "Security & Conflict" },
    /* 338 */ { "en": "Demilitarized Zone (DMZ)", "ja": "非武装地帯", "category": "Security & Conflict" },
    /* 339 */ { "en": "No-fly zone", "ja": "飛行禁止区域", "category": "Security & Conflict" },
    /* 340 */ { "en": "Blockade", "ja": "封鎖", "category": "Security & Conflict" },
    /* 341 */ { "en": "Early warning system", "ja": "早期警戒システム", "category": "Security & Conflict" },
    /* 342 */ { "en": "Disarmament, Demobilization and Reintegration (DDR)", "ja": "武装解除・動員解除・社会復帰", "category": "Security & Conflict" },
    /* 343 */ { "en": "Improvised Explosive Device (IED)", "ja": "即席爆発装置", "category": "Security & Conflict" },
    /* 344 */ { "en": "Landmines", "ja": "地雷", "category": "Security & Conflict" },
    /* 345 */ { "en": "Drone strike", "ja": "ドローン攻撃", "category": "Security & Conflict" },
    /* 346 */ { "en": "Cyber warfare", "ja": "サイバー戦", "category": "Security & Conflict" },
    /* 347 */ { "en": "Espionage", "ja": "スパイ活動", "category": "Security & Conflict" },
    /* 348 */ { "en": "Intelligence gathering", "ja": "情報収集", "category": "Security & Conflict" },
    /* 349 */ { "en": "Securitization", "ja": "安全保障化", "category": "Security & Conflict" },
    /* 350 */ { "en": "State-sponsored terrorism", "ja": "国家支援テロ", "category": "Security & Conflict" },
    /* 351 */ { "en": "Mutiny", "ja": "反乱", "category": "Security & Conflict" },
    /* 352 */ { "en": "Coup d'état", "ja": "クーデター", "category": "Security & Conflict" },
    /* 353 */ { "en": "Junta", "ja": "軍事政権", "category": "Security & Conflict" },
    /* 354 */ { "en": "Martial law", "ja": "戒厳令", "category": "Security & Conflict" },
    /* 355 */ { "en": "Human rights", "ja": "人権", "category": "Human Rights" },
    /* 356 */ { "en": "Fundamental freedoms", "ja": "基本的自由", "category": "Human Rights" },
    /* 357 */ { "en": "Universal Declaration of Human Rights (UDHR)", "ja": "世界人権宣言", "category": "Human Rights" },
    /* 358 */ { "en": "Violations", "ja": "侵害", "category": "Human Rights" },
    /* 359 */ { "en": "Abuses", "ja": "虐待・乱用", "category": "Human Rights" },
    /* 360 */ { "en": "Discrimination", "ja": "差別", "category": "Human Rights" },
    /* 361 */ { "en": "Equality", "ja": "平等", "category": "Human Rights" },
    /* 362 */ { "en": "Equity", "ja": "公平性", "category": "Human Rights" },
    /* 363 */ { "en": "Empowerment", "ja": "エンパワーメント（権限付与）", "category": "Human Rights" },
    /* 364 */ { "en": "Marginalized", "ja": "社会的に疎外された", "category": "Human Rights" },
    /* 365 */ { "en": "Vulnerable groups", "ja": "社会的弱者", "category": "Human Rights" },
    /* 366 */ { "en": "Indigenous peoples", "ja": "先住民族", "category": "Human Rights" },
    /* 367 */ { "en": "Minorities", "ja": "少数派", "category": "Human Rights" },
    /* 368 */ { "en": "Gender equality", "ja": "ジェンダー平等", "category": "Human Rights" },
    /* 369 */ { "en": "Women's rights", "ja": "女性の権利", "category": "Human Rights" },
    /* 370 */ { "en": "Child labor", "ja": "児童労働", "category": "Human Rights" },
    /* 371 */ { "en": "Human trafficking", "ja": "人身売買", "category": "Human Rights" },
    /* 372 */ { "en": "Smuggling of migrants", "ja": "移民密航", "category": "Human Rights" },
    /* 373 */ { "en": "Exploitation", "ja": "搾取", "category": "Human Rights" },
    /* 374 */ { "en": "Forced labor", "ja": "強制労働", "category": "Human Rights" },
    /* 375 */ { "en": "Modern slavery", "ja": "現代の奴隷制", "category": "Human Rights" },
    /* 376 */ { "en": "Freedom of expression", "ja": "表現の自由", "category": "Human Rights" },
    /* 377 */ { "en": "Freedom of assembly", "ja": "集会の自由", "category": "Human Rights" },
    /* 378 */ { "en": "Freedom of religion", "ja": "信教の自由", "category": "Human Rights" },
    /* 379 */ { "en": "Censorship", "ja": "検閲", "category": "Human Rights" },
    /* 380 */ { "en": "Persecution", "ja": "迫害", "category": "Human Rights" },
    /* 381 */ { "en": "Refugee", "ja": "難民", "category": "Human Rights" },
    /* 382 */ { "en": "Internally Displaced Persons (IDP)", "ja": "国内避難民", "category": "Human Rights" },
    /* 383 */ { "en": "Asylum seeker", "ja": "難民認定申請者", "category": "Human Rights" },
    /* 384 */ { "en": "Humanitarian aid", "ja": "人道支援", "category": "Human Rights" },
    /* 385 */ { "en": "Relief efforts", "ja": "救援活動", "category": "Human Rights" },
    /* 386 */ { "en": "Humanitarian corridor", "ja": "人道回廊", "category": "Human Rights" },
    /* 387 */ { "en": "Donor country", "ja": "援助国", "category": "Human Rights" },
    /* 388 */ { "en": "Recipient country", "ja": "被援助国", "category": "Human Rights" },
    /* 389 */ { "en": "Capacity building", "ja": "能力構築", "category": "Human Rights" },
    /* 390 */ { "en": "Civil society", "ja": "市民社会", "category": "Human Rights" },
    /* 391 */ { "en": "Non-Governmental Organization (NGO)", "ja": "非政府組織", "category": "Human Rights" },
    /* 392 */ { "en": "Advocacy", "ja": "提唱・擁護", "category": "Human Rights" },
    /* 393 */ { "en": "Accountability", "ja": "説明責任", "category": "Human Rights" },
    /* 394 */ { "en": "Transparency", "ja": "透明性", "category": "Human Rights" },
    /* 395 */ { "en": "Good governance", "ja": "グッド・ガバナンス", "category": "Human Rights" },
    /* 396 */ { "en": "Corruption", "ja": "汚職", "category": "Human Rights" },
    /* 397 */ { "en": "Poverty alleviation", "ja": "貧困削減", "category": "Human Rights" },
    /* 398 */ { "en": "Eradication", "ja": "根絶", "category": "Human Rights" },
    /* 399 */ { "en": "Sanitation", "ja": "公衆衛生（下水設備等）", "category": "Human Rights" },
    /* 400 */ { "en": "Malnutrition", "ja": "栄養失調", "category": "Human Rights" },
    /* 401 */ { "en": "Famine", "ja": "飢饉", "category": "Human Rights" },
    /* 402 */ { "en": "Food security", "ja": "食料安全保障", "category": "Human Rights" },
    /* 403 */ { "en": "Water scarcity", "ja": "水不足", "category": "Human Rights" },
    /* 404 */ { "en": "Xenophobia", "ja": "外国人嫌悪", "category": "Human Rights" },
    /* 405 */ { "en": "Hate speech", "ja": "ヘイトスピーチ", "category": "Human Rights" },
    /* 406 */ { "en": "LGBTQ+ rights", "ja": "LGBTQ+の権利", "category": "Human Rights" },
    /* 407 */ { "en": "Persons with disabilities", "ja": "障害者", "category": "Human Rights" },
    /* 408 */ { "en": "Right to privacy", "ja": "プライバシーの権利", "category": "Human Rights" },
    /* 409 */ { "en": "Right to education", "ja": "教育を受ける権利", "category": "Human Rights" },
    /* 410 */ { "en": "Arbitrary detention", "ja": "恣意的な拘留", "category": "Human Rights" },
    /* 411 */ { "en": "Extrajudicial killing", "ja": "超法規的殺害", "category": "Human Rights" },
    /* 412 */ { "en": "Torture", "ja": "拷問", "category": "Human Rights" },
    /* 413 */ { "en": "Sustainable development", "ja": "持続可能な開発", "category": "Economics & Environment" },
    /* 414 */ { "en": "SDGs", "ja": "持続可能な開発目標", "category": "Economics & Environment" },
    /* 415 */ { "en": "Economic growth", "ja": "経済成長", "category": "Economics & Environment" },
    /* 416 */ { "en": "Developing country", "ja": "発展途上国", "category": "Economics & Environment" },
    /* 417 */ { "en": "Developed country", "ja": "先進国", "category": "Economics & Environment" },
    /* 418 */ { "en": "Least Developed Countries (LDCs)", "ja": "後発開発途上国", "category": "Economics & Environment" },
    /* 419 */ { "en": "Gross Domestic Product (GDP)", "ja": "国内総生産", "category": "Economics & Environment" },
    /* 420 */ { "en": "Foreign Direct Investment (FDI)", "ja": "外国直接投資", "category": "Economics & Environment" },
    /* 421 */ { "en": "Official Development Assistance (ODA)", "ja": "政府開発援助", "category": "Economics & Environment" },
    /* 422 */ { "en": "Microfinance", "ja": "マイクロファイナンス", "category": "Economics & Environment" },
    /* 423 */ { "en": "Debt relief", "ja": "債務救済", "category": "Economics & Environment" },
    /* 424 */ { "en": "Tariff", "ja": "関税", "category": "Economics & Environment" },
    /* 425 */ { "en": "Subsidy", "ja": "補助金", "category": "Economics & Environment" },
    /* 426 */ { "en": "Free trade", "ja": "自由貿易", "category": "Economics & Environment" },
    /* 427 */ { "en": "Protectionism", "ja": "保護主義", "category": "Economics & Environment" },
    /* 428 */ { "en": "Globalization", "ja": "グローバル化", "category": "Economics & Environment" },
    /* 429 */ { "en": "Supply chain", "ja": "サプライチェーン", "category": "Economics & Environment" },
    /* 430 */ { "en": "Infrastructure", "ja": "インフラ", "category": "Economics & Environment" },
    /* 431 */ { "en": "Public-Private Partnership (PPP)", "ja": "官民連携", "category": "Economics & Environment" },
    /* 432 */ { "en": "Innovation", "ja": "技術革新", "category": "Economics & Environment" },
    /* 433 */ { "en": "Technology transfer", "ja": "技術移転", "category": "Economics & Environment" },
    /* 434 */ { "en": "Brain drain", "ja": "頭脳流出", "category": "Economics & Environment" },
    /* 435 */ { "en": "Remittances", "ja": "海外送金", "category": "Economics & Environment" },
    /* 436 */ { "en": "Climate change", "ja": "気候変動", "category": "Economics & Environment" },
    /* 437 */ { "en": "Global warming", "ja": "地球温暖化", "category": "Economics & Environment" },
    /* 438 */ { "en": "Greenhouse gases (GHG)", "ja": "温室効果ガス", "category": "Economics & Environment" },
    /* 439 */ { "en": "Emissions", "ja": "排出量", "category": "Economics & Environment" },
    /* 440 */ { "en": "Carbon footprint", "ja": "カーボンフットプリント", "category": "Economics & Environment" },
    /* 441 */ { "en": "Carbon neutrality", "ja": "カーボンニュートラル", "category": "Economics & Environment" },
    /* 442 */ { "en": "Mitigation", "ja": "緩和（気候変動の）", "category": "Economics & Environment" },
    /* 443 */ { "en": "Adaptation", "ja": "適応（気候変動への）", "category": "Economics & Environment" },
    /* 444 */ { "en": "Renewable energy", "ja": "再生可能エネルギー", "category": "Economics & Environment" },
    /* 445 */ { "en": "Fossil fuels", "ja": "化石燃料", "category": "Economics & Environment" },
    /* 446 */ { "en": "Deforestation", "ja": "森林破壊", "category": "Economics & Environment" },
    /* 447 */ { "en": "Desertification", "ja": "砂漠化", "category": "Economics & Environment" },
    /* 448 */ { "en": "Biodiversity", "ja": "生物多様性", "category": "Economics & Environment" },
    /* 449 */ { "en": "Conservation", "ja": "保全", "category": "Economics & Environment" },
    /* 450 */ { "en": "Ecosystem", "ja": "生態系", "category": "Economics & Environment" },
    /* 451 */ { "en": "Pollution", "ja": "汚染", "category": "Economics & Environment" },
    /* 452 */ { "en": "Waste management", "ja": "廃棄物管理", "category": "Economics & Environment" },
    /* 453 */ { "en": "Circular economy", "ja": "循環型経済", "category": "Economics & Environment" },
    /* 454 */ { "en": "Vulnerability", "ja": "脆弱性", "category": "Economics & Environment" },
    /* 455 */ { "en": "Resilience", "ja": "回復力・レジリエンス", "category": "Economics & Environment" },
    /* 456 */ { "en": "Natural disaster", "ja": "自然災害", "category": "Economics & Environment" },
    /* 457 */ { "en": "Disaster risk reduction (DRR)", "ja": "災害リスク軽減", "category": "Economics & Environment" },
    /* 458 */ { "en": "Monetary policy", "ja": "金融政策", "category": "Economics & Environment" },
    /* 459 */ { "en": "Fiscal policy", "ja": "財政政策", "category": "Economics & Environment" },
    /* 460 */ { "en": "Inflation", "ja": "インフレーション", "category": "Economics & Environment" },
    /* 461 */ { "en": "Austerity measures", "ja": "緊縮財政措置", "category": "Economics & Environment" },
    /* 462 */ { "en": "Black market", "ja": "闇市場", "category": "Economics & Environment" },
    /* 463 */ { "en": "Money laundering", "ja": "資金洗浄", "category": "Economics & Environment" },
    /* 464 */ { "en": "Tax evasion", "ja": "脱税", "category": "Economics & Environment" },
    /* 465 */ { "en": "Tax haven", "ja": "タックスヘイブン（租税回避地）", "category": "Economics & Environment" },
    /* 466 */ { "en": "Cryptocurrency", "ja": "暗号資産", "category": "Economics & Environment" },
    /* 467 */ { "en": "Urbanization", "ja": "都市化", "category": "Economics & Environment" },
    /* 468 */ { "en": "Slum upgrading", "ja": "スラム改善", "category": "Economics & Environment" },
    /* 469 */ { "en": "Public health", "ja": "公衆衛生", "category": "Health & Pandemics" },
    /* 470 */ { "en": "Pandemic", "ja": "世界的流行（パンデミック）", "category": "Health & Pandemics" },
    /* 471 */ { "en": "Epidemic", "ja": "局地的な流行", "category": "Health & Pandemics" },
    /* 472 */ { "en": "Endemic", "ja": "風土病", "category": "Health & Pandemics" },
    /* 473 */ { "en": "Outbreak", "ja": "（感染症の）発生・大流行", "category": "Health & Pandemics" },
    /* 474 */ { "en": "Quarantine", "ja": "検疫・隔離", "category": "Health & Pandemics" },
    /* 475 */ { "en": "Vaccination", "ja": "ワクチン接種", "category": "Health & Pandemics" },
    /* 476 */ { "en": "Immunization", "ja": "予防接種・免疫付与", "category": "Health & Pandemics" },
    /* 477 */ { "en": "Herd immunity", "ja": "集団免疫", "category": "Health & Pandemics" },
    /* 478 */ { "en": "Pathogen", "ja": "病原体", "category": "Health & Pandemics" },
    /* 479 */ { "en": "Morbidity", "ja": "罹患率", "category": "Health & Pandemics" },
    /* 480 */ { "en": "Mortality rate", "ja": "死亡率", "category": "Health & Pandemics" },
    /* 481 */ { "en": "Life expectancy", "ja": "平均寿命", "category": "Health & Pandemics" },
    /* 482 */ { "en": "Healthcare system", "ja": "医療制度", "category": "Health & Pandemics" },
    /* 483 */ { "en": "Universal Health Coverage (UHC)", "ja": "ユニバーサル・ヘルス・カバレッジ", "category": "Health & Pandemics" },
    /* 484 */ { "en": "Primary care", "ja": "初期医療", "category": "Health & Pandemics" },
    /* 485 */ { "en": "Infectious diseases", "ja": "感染症", "category": "Health & Pandemics" },
    /* 486 */ { "en": "Non-communicable diseases (NCDs)", "ja": "非感染性疾患", "category": "Health & Pandemics" },
    /* 487 */ { "en": "Malaria", "ja": "マラリア", "category": "Health & Pandemics" },
    /* 488 */ { "en": "Tuberculosis", "ja": "結核", "category": "Health & Pandemics" },
    /* 489 */ { "en": "HIV/AIDS", "ja": "ヒト免疫不全ウイルス/後天性免疫不全症候群", "category": "Health & Pandemics" },
    /* 490 */ { "en": "Maternal mortality", "ja": "妊産婦死亡率", "category": "Health & Pandemics" },
    /* 491 */ { "en": "Infant mortality", "ja": "乳児死亡率", "category": "Health & Pandemics" },
    /* 492 */ { "en": "Antimicrobial resistance (AMR)", "ja": "薬剤耐性", "category": "Health & Pandemics" },
    /* 493 */ { "en": "Zoonotic diseases", "ja": "人獣共通感染症", "category": "Health & Pandemics" },
    /* 494 */ { "en": "Ebola", "ja": "エボラ出血熱", "category": "Health & Pandemics" },
    /* 495 */ { "en": "Contact tracing", "ja": "接触者追跡", "category": "Health & Pandemics" },
    /* 496 */ { "en": "Social distancing", "ja": "社会的距離", "category": "Health & Pandemics" },
    /* 497 */ { "en": "Personal Protective Equipment (PPE)", "ja": "個人用防護具", "category": "Health & Pandemics" },
    /* 498 */ { "en": "Ventilator", "ja": "人工呼吸器", "category": "Health & Pandemics" },
    /* 499 */ { "en": "Pharmaceuticals", "ja": "医薬品", "category": "Health & Pandemics" },
    /* 500 */ { "en": "Patents", "ja": "特許", "category": "Health & Pandemics" },
    /* 501 */ { "en": "Intellectual property waiver", "ja": "知的財産権の免除", "category": "Health & Pandemics" },
    /* 502 */ { "en": "Mental health", "ja": "精神保健", "category": "Health & Pandemics" },
    /* 503 */ { "en": "Stigma", "ja": "スティグマ（社会的烙印）", "category": "Health & Pandemics" },
    /* 504 */ { "en": "Malnutrition", "ja": "栄養不良", "category": "Health & Pandemics" },
    /* 505 */ { "en": "Cybersecurity", "ja": "サイバーセキュリティ", "category": "Cyber & Technology" },
    /* 506 */ { "en": "Cyber warfare", "ja": "サイバー戦", "category": "Cyber & Technology" },
    /* 507 */ { "en": "Cyber terrorism", "ja": "サイバーテロ", "category": "Cyber & Technology" },
    /* 508 */ { "en": "Information warfare", "ja": "情報戦", "category": "Cyber & Technology" },
    /* 509 */ { "en": "Misinformation", "ja": "誤情報", "category": "Cyber & Technology" },
    /* 510 */ { "en": "Disinformation", "ja": "偽情報", "category": "Cyber & Technology" },
    /* 511 */ { "en": "Artificial Intelligence (AI)", "ja": "人工知能", "category": "Cyber & Technology" },
    /* 512 */ { "en": "Machine learning", "ja": "機械学習", "category": "Cyber & Technology" },
    /* 513 */ { "en": "Algorithm", "ja": "アルゴリズム", "category": "Cyber & Technology" },
    /* 514 */ { "en": "Data privacy", "ja": "データプライバシー", "category": "Cyber & Technology" },
    /* 515 */ { "en": "Data breach", "ja": "データ漏洩", "category": "Cyber & Technology" },
    /* 516 */ { "en": "Encryption", "ja": "暗号化", "category": "Cyber & Technology" },
    /* 517 */ { "en": "Decryption", "ja": "復号", "category": "Cyber & Technology" },
    /* 518 */ { "en": "Surveillance", "ja": "監視", "category": "Cyber & Technology" },
    /* 519 */ { "en": "Mass surveillance", "ja": "大量監視", "category": "Cyber & Technology" },
    /* 520 */ { "en": "Digital divide", "ja": "情報格差（デジタル・ディバイド）", "category": "Cyber & Technology" },
    /* 521 */ { "en": "E-commerce", "ja": "電子商取引", "category": "Cyber & Technology" },
    /* 522 */ { "en": "E-governance", "ja": "電子政府", "category": "Cyber & Technology" },
    /* 523 */ { "en": "Internet of Things (IoT)", "ja": "モノのインターネット", "category": "Cyber & Technology" },
    /* 524 */ { "en": "5G network", "ja": "第5世代移動通信システム", "category": "Cyber & Technology" },
    /* 525 */ { "en": "Broadband access", "ja": "ブロードバンドアクセス", "category": "Cyber & Technology" },
    /* 526 */ { "en": "Cybercrime", "ja": "サイバー犯罪", "category": "Cyber & Technology" },
    /* 527 */ { "en": "Hacking", "ja": "ハッキング", "category": "Cyber & Technology" },
    /* 528 */ { "en": "Ransomware", "ja": "ランサムウェア", "category": "Cyber & Technology" },
    /* 529 */ { "en": "Phishing", "ja": "フィッシング詐欺", "category": "Cyber & Technology" },
    /* 530 */ { "en": "Deepfake", "ja": "ディープフェイク", "category": "Cyber & Technology" },
    /* 531 */ { "en": "Lethal Autonomous Weapons Systems (LAWS)", "ja": "自律型致死兵器システム", "category": "Cyber & Technology" },
    /* 532 */ { "en": "Biometrics", "ja": "生体認証", "category": "Cyber & Technology" },
    /* 533 */ { "en": "Facial recognition", "ja": "顔認識", "category": "Cyber & Technology" },
    /* 534 */ { "en": "Digital literacy", "ja": "デジタルリテラシー", "category": "Cyber & Technology" },
    /* 535 */ { "en": "Open source", "ja": "オープンソース", "category": "Cyber & Technology" },
    /* 536 */ { "en": "Cloud computing", "ja": "クラウドコンピューティング", "category": "Cyber & Technology" },
    /* 537 */ { "en": "Net neutrality", "ja": "ネット中立性", "category": "Cyber & Technology" },
    /* 538 */ { "en": "Tech giant", "ja": "巨大IT企業", "category": "Cyber & Technology" },
    /* 539 */ { "en": "Monopoly", "ja": "独占", "category": "Cyber & Technology" },
    /* 540 */ { "en": "Antitrust laws", "ja": "独占禁止法", "category": "Cyber & Technology" },
    /* 541 */ { "en": "UN Charter", "ja": "国連憲章", "category": "UN Pacts & Agreements" },
    /* 542 */ { "en": "Universal Declaration of Human Rights", "ja": "世界人権宣言", "category": "UN Pacts & Agreements" },
    /* 543 */ { "en": "Geneva Conventions", "ja": "ジュネーブ条約", "category": "UN Pacts & Agreements" },
    /* 544 */ { "en": "Rome Statute", "ja": "ローマ規程", "category": "UN Pacts & Agreements" },
    /* 545 */ { "en": "Paris Agreement", "ja": "パリ協定", "category": "UN Pacts & Agreements" },
    /* 546 */ { "en": "Kyoto Protocol", "ja": "京都議定書", "category": "UN Pacts & Agreements" },
    /* 547 */ { "en": "Non-Proliferation Treaty (NPT)", "ja": "核兵器不拡散条約", "category": "UN Pacts & Agreements" },
    /* 548 */ { "en": "Comprehensive Nuclear-Test-Ban Treaty (CTBT)", "ja": "包括的核実験禁止条約", "category": "UN Pacts & Agreements" },
    /* 549 */ { "en": "Treaty on the Prohibition of Nuclear Weapons (TPNW)", "ja": "核兵器禁止条約", "category": "UN Pacts & Agreements" },
    /* 550 */ { "en": "Chemical Weapons Convention (CWC)", "ja": "化学兵器禁止条約", "category": "UN Pacts & Agreements" },
    /* 551 */ { "en": "Biological Weapons Convention (BWC)", "ja": "生物兵器禁止条約", "category": "UN Pacts & Agreements" },
    /* 552 */ { "en": "Convention on the Rights of the Child (CRC)", "ja": "子どもの権利条約", "category": "UN Pacts & Agreements" },
    /* 553 */ { "en": "CEDAW", "ja": "女子差別撤廃条約", "category": "UN Pacts & Agreements" },
    /* 554 */ { "en": "Refugee Convention (1951)", "ja": "難民の地位に関する条約", "category": "UN Pacts & Agreements" },
    /* 555 */ { "en": "UNCLOS", "ja": "国連海洋法条約", "category": "UN Pacts & Agreements" },
    /* 556 */ { "en": "Outer Space Treaty", "ja": "宇宙条約", "category": "UN Pacts & Agreements" },
    /* 557 */ { "en": "Antarctic Treaty", "ja": "南極条約", "category": "UN Pacts & Agreements" },
    /* 558 */ { "en": "Sendai Framework", "ja": "仙台防災枠組", "category": "UN Pacts & Agreements" },
    /* 559 */ { "en": "Agenda 2030", "ja": "持続可能な開発のための2030アジェンダ", "category": "UN Pacts & Agreements" },
    /* 560 */ { "en": "Millennium Development Goals (MDGs)", "ja": "ミレニアム開発目標", "category": "UN Pacts & Agreements" },
    /* 561 */ { "en": "Convention on Biological Diversity (CBD)", "ja": "生物多様性条約", "category": "UN Pacts & Agreements" },
    /* 562 */ { "en": "CITES", "ja": "ワシントン条約", "category": "UN Pacts & Agreements" },
    /* 563 */ { "en": "Basel Convention", "ja": "バーゼル条約（有害廃棄物）", "category": "UN Pacts & Agreements" },
    /* 564 */ { "en": "Minamata Convention", "ja": "水俣条約", "category": "UN Pacts & Agreements" },
    /* 565 */ { "en": "Stockholm Convention", "ja": "ストックホルム条約（POPs）", "category": "UN Pacts & Agreements" },
    /* 566 */ { "en": "Marrakesh Agreement", "ja": "マラケシュ協定（WTO設立）", "category": "UN Pacts & Agreements" },
    /* 567 */ { "en": "GATT", "ja": "関税および貿易に関する一般協定", "category": "UN Pacts & Agreements" },
    /* 568 */ { "en": "TRIPS", "ja": "知的所有権の貿易関連の側面に関する協定", "category": "UN Pacts & Agreements" },
    /* 569 */ { "en": "Global Compact for Migration", "ja": "移民に関するグローバル・コンパクト", "category": "UN Pacts & Agreements" },
    /* 570 */ { "en": "Global Compact on Refugees", "ja": "難民に関するグローバル・コンパクト", "category": "UN Pacts & Agreements" },
    /* 571 */ { "en": "Responsibility to Protect (R2P)", "ja": "保護する責任", "category": "UN Pacts & Agreements" },
    /* 572 */ { "en": "Brundtland Report", "ja": "ブルントラント委員会報告書", "category": "UN Pacts & Agreements" },
    /* 573 */ { "en": "Copenhagen Accord", "ja": "コペンハーゲン合意", "category": "UN Pacts & Agreements" },
    /* 574 */ { "en": "Camp David Accords", "ja": "キャンプ・デービッド合意", "category": "UN Pacts & Agreements" },
    /* 575 */ { "en": "Oslo Accords", "ja": "オスロ合意", "category": "UN Pacts & Agreements" },
    /* 576 */ { "en": "Dayton Agreement", "ja": "デイトン合意", "category": "UN Pacts & Agreements" },
    /* 577 */ { "en": "Good Friday Agreement", "ja": "ベルファスト合意", "category": "UN Pacts & Agreements" },
    /* 578 */ { "en": "Minsk Agreements", "ja": "ミンスク合意", "category": "UN Pacts & Agreements" },
    /* 579 */ { "en": "Abraham Accords", "ja": "アブラハム合意", "category": "UN Pacts & Agreements" },
    /* 580 */ { "en": "Treaty of Westphalia", "ja": "ウェストファリア条約", "category": "UN Pacts & Agreements" }
];

let currentWords = [...ALL_WORDS];
let currentIndex = 0;
let activeCategory = 'All';
let currentView = 'flashcards';

// Populate Sidebar Categories
const categories = [...new Set(ALL_WORDS.map(w => w.category))];
const navMenu = document.getElementById('navMenu');
categories.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'nav-item category-item';
    div.style.fontSize = '14px';
    div.innerHTML = `📁 ${cat}`;
    div.onclick = function() {
        selectCategory(cat, this);
    };
    navMenu.appendChild(div);
});

// Handle Category Selection
function selectCategory(cat, el) {
    document.querySelectorAll('.category-item').forEach(item => item.classList.remove('active'));
    el.classList.add('active');
    activeCategory = cat;
    filterData();
    updateHeaderTitle();
}

// View Switching
function switchView(viewId, el) {
    document.querySelectorAll('.nav-item[data-type="view"]').forEach(e => e.classList.remove('active'));
    el.classList.add('active');
    
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(viewId + 'View').classList.add('active');
    
    currentView = viewId;
    updateHeaderTitle();
    
    if(viewId === 'flashcards') {
        updateCard();
    } else if (viewId === 'dictionary') {
        renderDictionary();
    } else if (viewId === 'cheatsheet') {
        renderCheatSheet();
    }
}

function updateHeaderTitle() {
    let viewName = currentView.charAt(0).toUpperCase() + currentView.slice(1);
    if (currentView === 'cheatsheet') viewName = 'Cheat Sheet';
    document.getElementById('headerTitle').innerText = `${viewName} - ${activeCategory}`;
}

// Filter Logic
function filterData() {
    if (activeCategory === 'All') {
        currentWords = [...ALL_WORDS];
    } else {
        currentWords = ALL_WORDS.filter(w => w.category === activeCategory);
    }
    currentIndex = 0;
    
    if (currentView === 'flashcards') updateCard();
    if (currentView === 'dictionary') renderDictionary();
    if (currentView === 'cheatsheet') renderCheatSheet();
}

// --- Flashcard Logic ---
function updateCard() {
    if (currentWords.length === 0) return;
    const frontEl = document.getElementById('card-front');
    const backEl = document.getElementById('card-back');
    const catFront = document.getElementById('card-cat-front');
    const catBack = document.getElementById('card-cat-back');
    const mode = document.getElementById('langMode').value;
    const card = document.getElementById('flashcard');
    
    card.classList.remove('is-flipped');
    
    setTimeout(() => {
        const word = currentWords[currentIndex];
        if (mode === 'en-ja') {
            frontEl.innerText = word.en;
            backEl.innerText = word.ja;
        } else {
            frontEl.innerText = word.ja;
            backEl.innerText = word.en;
        }
        catFront.innerText = word.category;
        catBack.innerText = word.category;
        document.getElementById('progressText').innerText = `${currentIndex + 1} / ${currentWords.length}`;
    }, 150);
}

function flipCard() { document.getElementById('flashcard').classList.toggle('is-flipped'); }
function nextCard() { if (currentIndex < currentWords.length - 1) { currentIndex++; updateCard(); } }
function prevCard() { if (currentIndex > 0) { currentIndex--; updateCard(); } }
function shuffleCards() {
    for (let i = currentWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentWords[i], currentWords[j]] = [currentWords[j], currentWords[i]];
    }
    currentIndex = 0;
    updateCard();
}

// --- Dictionary Logic ---
function renderDictionary() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const grid = document.getElementById('dictGrid');
    grid.innerHTML = '';
    
    const filtered = currentWords.filter(w => 
        w.en.toLowerCase().includes(query) || w.ja.includes(query)
    );

    if(filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state">No words found for "${query}"</div>`;
        return;
    }

    filtered.forEach(w => {
        const div = document.createElement('div');
        div.className = 'dict-card';
        div.innerHTML = `
            <div class="dict-en">${w.en}</div>
            <div class="dict-ja">${w.ja}</div>
            <div class="dict-cat">${w.category}</div>
        `;
        grid.appendChild(div);
    });
}

// --- Cheat Sheet Logic ---
function renderCheatSheet() {
    const tbody = document.getElementById('cheatSheetBody');
    tbody.innerHTML = '';
    
    currentWords.forEach(w => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 800; color: var(--un-blue);">${w.en}</td>
            <td style="font-weight: 600;">${w.ja}</td>
            <td><span class="dict-cat">${w.category}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
    if (currentView === 'flashcards') {
        if (e.key === 'ArrowRight') nextCard();
        if (e.key === 'ArrowLeft') prevCard();
        if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            flipCard();
        }
    }
});

// Initialization
updateCard();
renderCheatSheet();
import React, { useState, useEffect } from 'react';

export default function App() {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newWord, setNewWord] = useState('');
  const [newMeaning, setNewMeaning] = useState('');

  // 1. 初回ロード時に API から単語データを取り出す (GET)
  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/words');
      const result = await res.json();
      if (result.success) {
        setWords(result.data);
      }
    } catch (error) {
      console.error('データの取得に失敗しました:', error);
    } finally {
      setLoading(false);
    }
  };

  // 2. ユーザーが単語を追加した時に API へ送信する (POST)
  const handleAddWord = async (e) => {
    e.preventDefault();
    if (!newWord || !newMeaning) return;

    try {
      const res = await fetch('/api/words', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          word: newWord,
          meaning: newMeaning,
          tags: ['User Added']
        }),
      });

      const result = await res.json();
      if (result.success) {
        // 画面のリストを更新
        setWords([...words, result.data]);
        setNewWord('');
        setNewMeaning('');
      }
    } catch (error) {
      console.error('単語の追加に失敗しました:', error);
    }
  };

  if (loading) return <div>読み込み中...</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>MUN 単語帳 & テスト</h1>

      {/* 単語追加フォーム */}
      <form onSubmit={handleAddWord} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="英単語 (例: Motion)"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
          style={{ marginRight: '10px', padding: '8px' }}
        />
        <input
          type="text"
          placeholder="意味 (例: 動議)"
          value={newMeaning}
          onChange={(e) => setNewMeaning(e.target.value)}
          style={{ marginRight: '10px', padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>追加</button>
      </form>

      {/* 単語一覧表示 */}
      <h2>登録済み単語一覧 ({words.length}件)</h2>
      <ul>
        {words.map((item) => (
          <li key={item.id} style={{ marginBottom: '8px' }}>
            <strong>{item.word}</strong>: {item.meaning}
          </li>
        ))}
      </ul>
    </div>
  );
}
