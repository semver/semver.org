---
layout: japanese
title: セマンティック バージョニング 2.0.0
---

セマンティック バージョニング 2.0.0
==============================

概要
-------

バージョンナンバーは、メジャー.マイナー.パッチとし、バージョンを上げるには、

1. APIの変更に互換性のない場合はメジャーバージョンを、
2. 後方互換性があり機能性を追加した場合はマイナーバージョンを、
3. 後方互換性を伴うバグ修正をした場合はパッチバージョンを上げます。

プレリリースやビルドナンバーなどのラベルに関しては、メジャー.マイナー.パッチの形式を拡張する形で利用することができます。

導入
------------

ソフトウェア・マネージメントの世界には、『依存性地獄』と呼ばれる恐ろしいものがあります。あなたのシステムが大きく成長すればするほど、さまざまなパッケージを組む込めば組み込むほど、いつか自分が地獄の底にいることに気づくでしょう。

多くの依存性を有しているシステムにとって、新しいバージョンがリリースされることは悪夢でしかありません。もし非常にきつく依存関係を指定してあれば、あなたのシステムはバージョン・ロック（全依存パッケージを新しくしない限り、アップグレードできない）しなければなりません。 逆に、依存性をあまりにも緩く管理していれば、バージョンが複雑に絡まり合い痛い目にあうことは避けられないでしょう（合理性よりも将来のバージョンとの互換性を気にすることになるでしょう）。依存性地獄とは、あなたのプロジェクトでバージョンロック・バージョン混乱が起こることで、プロジェクトがうまくいかないことを言います。

この問題の解決策として、私はシンプルなルールセットとバージョン・ナンバーをどのように割り当て、上げていくのか必要条件を定義することを提案します。これらのルールは既存のクローズド／オープンソースプロジェクトで普及している一般的な（必ずしもそうであるとは限りませんが）プラクティスをもとに作られています。このルールを利用するには、まずはパブリックなAPIを宣言する必要があります。これはドキュメントに記載されるか、コード自体で表現しているかもしれません。とにかく、APIが明確かつ正確であることは非常に重要な事です。一度、パブリックなAPIを宣言してまえば、それを変更する際にはルールに従ってバージョン番号を上げなければなりません。つまり、X.Y.Z（メジャー.マイナー.パッチ）のバージョン形式を考慮しなければなりません。APIに影響を及ぼさないバグフィクスはパッチバージョンを、後方互換性を保ちつつAPIを変更・追加した場合はマイナーバージョンを、後方互換性のないAPIの変更はメジャーバージョンを上げます。

私はこのシステムを『セマンティック バージョニング』と呼び、このスキームに従えば、あるバージョーンのコードが次のバージョンへの変更された際になにが変更されたのかユーザーに伝えることができます。

セマンティックバージョニング仕様書 (SemVer)
------------------------------------------

この文書における各キーワード「しなければなりません（MUST）」、「してはなりません（MUST NOT）」、「必要とされています（REQUIRED）」、「することとします(SHALL)」、「しないこととします（SHALL NOT）」、「するべきです（SHOULD）」、「するべきではありません（SHOULD NOT）」、「勧められています（RECOMMENDED）」、「してもよいです（MAY）」、「オプションです（OPTIONAL）」は、[RFC 2119](http://tools.ietf.org/html/rfc2119)に記載されている内容に従い解釈してください。

1. セマンティック バージョニングを適用するソフトウェアはパブリックなAPIを宣言しなければなりません（MUST）。このAPIはコード自体で表現されているかもしれませんし、厳密に文書として存在してるかもしれません。どちらにせよ、正確かつ漏れがないようにするべきです。

2. 通常のバージョンナンバーは、X.Y.Zの形式にしなければなりません（MUST）。このときX、Y、Zは負の整数であってはならず、各先頭にゼロを配置してはなりません（MUST NOT）。Xはメジャーバージョン、Yはマイナーバージョン、Zはパッチバージョンを表します。各段階は数値的にバージョンアップ しなければなりません（MUST）。例：1.9.0 -> 1.10.0 -> 1.11.0.

3. 一度パッケージをリリースしたのなら、そのバージョンのパッケージのコンテンツは修正してはなりません（MUST NOT）。いかなる修正も新しいバージョンとしてリリースしなければなりません（MUST）。

4. メジャーバージョンのゼロ（0.y.z）は初期段階の開発用です。いつでも、いかなる変更もありえます。この時、パブリックAPIは安定していると考えるべきではありません。

5. バージョン 1.0.0 でパブリックAPIを定義します。このリリース後のバージョンナンバーの上げ方に関しては、パブリックAPIとそれがどのくらい変更されるのかに依ります。

6. パッチバージョン Z （x.y.Z | x > 0）は、後方互換性を保ったバグ修正を取り込んだ場合のみ、上げなければなりません（MUST）。バグ修正とは間違った振る舞いを修正する内部の変更のことを言います。

7. マイナーバージョン Y （x.Y.z | x > 0）は、後方互換性を保ちつつ機能性をパブリックAPIに追加した場合、上げなければなりません（MUST）。また、いかなるパブリックAPIも廃止予定としたのなら、上げなければなりません（MUST）。プライベートコード内での新しい機能性の追加や改善を取り込んだ場合は、上げてもよいです（MAY）。パッチレベルの変更も含めてよいです（MAY）。マイナーバージョンを上げた際にはマイナーバージョンは0にリセットしなければなりません（MUST）。

8. メジャーバージョン X （X.y.z | X > 0）は、パブリックAPIに後方互換性を持たない変更が取り込まれた場合、上げなければなりません（MUST）。その時、マイナー、パッチレベルの変更も含めてよいです（MAY）。メジャーバージョンを上げた際にはパッチ、マイナーバージョンは0にリセットしなければなりません（MUST）。

9. プレリリースバージョンは、パッチバージョンの直後にハイフンとドットで区切られた識別子を追加することで表現してもよいです（MAY）。識別子は必ずASCII英数字とハイフン[0-9A-Za-z-]でなければなりません（MUST）。識別子は空であってはなりません（MUST NOT）。数値の識別子はゼロからは始めてはなりません（MUST NOT）。プレリリースバージョンは関連する通常のバージョンよりも優先度は低いです。プレリリースバージョンは、不安定であり、関連する通常バージョンが示す要件と互換性を満たさない可能性があります。例：1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

10. ビルドメタデータはパッチもしくはプレリリースバージョンの直後にプラス記号とドットで区切られた識別子を追加することで表現してもよいです（MAY）。識別子は必ずASCII英数字とハイフン[0-9A-Za-z-]でなければなりません（MUST）。識別子は空であってはなりません（MUST NOT）。バージョンの優先度を決める際にはビルドメタデータは無視されるべきです（SHOULD）
。つまり、2つのビルドメタデータだけが違うバージョンは、同じ優先度ということです。例：1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.

11. バージョン同士をどのように比較するのかは優先度によって決まります。優先度はメジャー、マイナー、パッチ、プレリリース識別子の順番（ビルドメタデータは優先度に関して考慮しない）で分けて評価されなければなりません（MUST）。優先度は、各識別子を左から右に比較して最初の違いによって評価します。以下のように、メジャー、マイナー、パッチバージョンと常に数値的に比較します。例：1.0.0 < 2.0.0 < 2.1.0 < 2.1.1. メジャー、マイナー、パッチが同じ場合、プレリリースバージョンを持っている方が通常のバージョンよりも低い優先度です。例：1.0.0-alpha < 1.0.0.同じ、メジャー、マイナー、パッチを持つプレリリースバージョンの優先度の決定は、ドットで区切れた識別子を左から右に、異なるところが見つかるまで比較し決定しなければなりません（MUST）。数値のみで構成される識別子は数値的に比較され、文字列やハイフンを含む識別子はASCIIソート順に辞書的に比較されます。数値的な識別子は常に非数値的な識別子よりも低い優先度です。もし先行する識別子が同じ場合、プレリリースのフィールドが小さいセットよりも大きいセットのほうが高い優先度です。例：1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.


なぜセマンティック バージョニングを使用するのか？
----------------------------

このアイデアは新しいものでもなければ、革新的なものでもありません。実際、みなさんも似たような取り組みを既に行っているかもしれません。問題は『似ている』のでは不十分だということです。正式な仕様書によるソートの取り決めがなければ、バージョンナンバーは依存性の管理において基本的には無意味です。上記のアイデアに対して名前と正確な定義を与えることよって、あなたの開発するソフトウェアにおいて、あなたの意図がユーザーに対して伝わりやすくなることでしょう。一度、これらの意図を正確にしてしませば、柔軟な（しかし、柔軟すぎてはいけない）依存性の仕様を作ることができる。

単純な例として、セマンティック バージョニングがどのように依存性地獄を過去のものとしたか説明します。『Firetruck』と呼ばれるライブラリについて考えてみましょう。それはセマンティック バージョニングされた『Ladder』というパッケージを必要とします。Firetruckを作成した時、Ladderはバージョン3.1.0でした。Firetruckは、バージョン3.1.0時に導入されたいくつかの機能を使用してるので、Ladderが3.1.0以上
4.0.0未満の範囲で安全に依存性を指定できます。Ladderのバージョン3.1.1と3.2.0が利用可能になった時、それらをパッケージ管理に取り込んでリリースすることができ、それらが既存の依存するソフトウェアと互換性があるということを知っています。

賢明な開発者であれば、もちろん、パッケージがアップグレードされたのならその機能を使ってみたいと思うはずでしょう。しかし、この世界は混沌としています。しかしそれを気にする必要性はありません。セマンティック バージョニングを実践することで、新しい依存パッケージを巻き込むことなく、まともな方法でリリース、アップグレードすることができ、手間と時間を節約してくれることでしょう。

もし、全面的に同意できると感じたのなら、セマンティックバージョニングを実践していることを宣言し、ルールを守って下さい。それからあなたのREADMEからこのWebサイトにリンクしてください、そうすれば、他の人がこのルールを知り、役立てることができるでしょう。

FAQ
---

### How should I deal with revisions in the 0.y.z initial development phase?

### 0.y.zのような初期の開発フェーズにおけるバージョンの取り扱いはどのようにすべきでしょうか？

一番簡単な方法は0.1.0からで開発版をリリースし、その後のリリースのたびにマイナーバージョンを上げていけばよいでしょう。

### 1.0.0のリリースはいつすべきでしょうか？

もし、既にプロダクション用途であなたのソフトウェアが利用されているのなら、それは1.0.0であるべきでしょう。もし安定したAPIを持ち、それに依存しているユーザーが複数いるのなら、それは1.0.0であるべきでしょう。もし、後方互換性について多大な心配をしているのなら、それは1.0.0であるべきでしょう。

### 高速開発や高速イテレーションに悪影響を与えませんか？

メジャーバージョンがゼロの場合、それは高速開発を意味しています。もし、毎日APIを変更しているのなら、0.y.zのバージョンのままにすべきか、開発ブランチとして切り分け、次のメジャーバージョンアップのために開発すべきです。

### パブリックAPIに対して後方互換性を保たない、ほんの些細な変更があった際もメジャーバージョンアップをしなければならないのなら、42.0.0のようにバージョンにすぐになってしまわない？

これは責任ある開発と深い洞察力のある質問です。多くの依存しているコードを持つソフトウェアにおいて、非互換な変更を気軽に取り込むべきではありません。アップグレードする度にかかるコストは無視できないものでしょう。非互換な変更をリリースするためにメジャーバージョンを上げることは、変更の影響を思い知ることになるでしょう、加えて、かかるコストと利益をどちらがおおきいか判断すべきでしょう。

### すべてのパブリックAPIに関してドキュメントを書くのは重労働です。

It is your responsibility as a professional developer to properly document software that is intended for use by others. Managing software complexity is a hugely important part of keeping a project efficient, and that's hard to do if nobody knows how to use your software, or what methods are safe to call. In the long run, Semantic Versioning, and the insistence on a well defined public API can keep everyone and everything running smoothly.

### What do I do if I accidentally release a backwards incompatible change as a minor version?

As soon as you realize that you've broken the Semantic Versioning spec, fix the problem and release a new minor version that corrects the problem and restores backwards compatibility. Even under this circumstance, it is unacceptable to modify versioned releases. If it's appropriate, document the offending version and inform your users of the problem so that they are aware of the offending version.

### What should I do if I update my own dependencies without changing the public API?

That would be considered compatible since it does not affect the public API. Software that explicitly depends on the same dependencies as your package should have their own dependency specifications and the author will notice any conflicts. Determining whether the change is a patch level or minor level modification depends on whether you updated your dependencies in order to fix a bug or introduce new functionality. I would usually expect additional code for the latter instance, in which case it's obviously a minor level increment.

### What if I inadvertently alter the public API in a way that is not compliant with the version number change (i.e. the code incorrectly introduces a major breaking change in a patch release)

Use your best judgment. If you have a huge audience that will be drastically impacted by changing the behavior back to what the public API intended, then it may be best to perform a major version release, even though the fix could strictly be considered a patch release. Remember, Semantic Versioning is all about conveying meaning by how the version number changes. If these changes are important to your users, use the version number to inform them.

### How should I handle deprecating functionality?

Deprecating existing functionality is a normal part of software development and is often required to make forward progress. When you deprecate part of your public API, you should do two things: (1) update your documentation to let users know about the change, (2) issue a new minor release with the deprecation in place. Before you completely remove the functionality in a new major release there should be at least one minor release that contains the deprecation so that users can smoothly transition to the new API.

### semvarのバージョン文字列に限度はありますか？

いいえ、ありませんが良識ある判断をしてください。例えば、255文字数のバージョン文字列は過剰と言えるでしょうし、特定のシステムではそれ独自の文字列の限界値があることでしょう。


著者について
-----

セマンティック バージョニング仕様書の著者はTom Preston-Werner氏です。彼はGravatarsの考案者であり、GitHunの共同創設者でもあります。

もし、フィードバックがある場合は、GitHub上でissueを立てて下さい。

ライセンス
-------

[Creative Commons - CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
