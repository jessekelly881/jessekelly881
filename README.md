
```emacs-lisp
(defvar jesse
  '(:name        "Jesse Kelly"
    :pronouns    "thou/thee/thine"
    :age         31
    :title       "lead software engineer"
    :url         "jessekelly.me"
    :email       "mail@jessekelly.me"
    :education   (mapcar '(λ (el) (concat el " @ The Ohio State University")
                         '("B.A. in Abstract Mathematics")
    :nationality "usa"
    :interests   '("functional programming" "emacs"
                   "rust" "crypto" "typescript" 
                   "effect-ts" "open source software" 
                   "web" "mathematics" "scuba" "travel")
    :lang        '(🇺🇸, 🇲🇽)))
```
