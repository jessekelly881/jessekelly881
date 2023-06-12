
```emacs-lisp
(defvar jesse
  '(:name        "Jesse Kelly"
    :pronouns    "he/him"
    :age         29
    :title       "senior software engineer"
    :url         "jessekelly.me"
    :education   (mapcar '(λ (el) (concat el " @ The Ohio State University")
                         '("B.A. in Abstract Mathematics")
    :nationality "American"
    :city        "Mexico City, 🇲🇽"
    :interests   '("functional programming" "emacs"
                   "rust" "crypto" "typescript" 
                   "open source software" 
                   "web" "mathematics" "scuba" 
                   "skydiving" "travel")
    :lang        '(🇺🇸, 🇲🇽)))
```
