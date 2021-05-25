goog.provide('rewrite_clj.zip');
/**
 * Function reference to clojure.zip/node
 */
rewrite_clj.zip.node = clojure.zip.node;
/**
 * Function reference to clojure.zip/root
 */
rewrite_clj.zip.root = clojure.zip.root;
/**
 * See [[base/of-string]]
 */
rewrite_clj.zip.of_string = rewrite_clj.zip.base.of_string;
/**
 * See [[base/root-string]]
 */
rewrite_clj.zip.root_string = rewrite_clj.zip.base.root_string;
/**
 * See [[base/string]]
 */
rewrite_clj.zip.string = rewrite_clj.zip.base.string;
/**
 * See [[base/tag]]
 */
rewrite_clj.zip.tag = rewrite_clj.zip.base.tag;
/**
 * See [[base/sexpr]]
 */
rewrite_clj.zip.sexpr = rewrite_clj.zip.base.sexpr;
/**
 * See [[move/right]]
 */
rewrite_clj.zip.right = rewrite_clj.zip.move.right;
/**
 * See [[move/left]]
 */
rewrite_clj.zip.left = rewrite_clj.zip.move.left;
/**
 * See [[move/down]]
 */
rewrite_clj.zip.down = rewrite_clj.zip.move.down;
/**
 * See [[move/up]]
 */
rewrite_clj.zip.up = rewrite_clj.zip.move.up;
/**
 * See [[move/next]]
 */
rewrite_clj.zip.next = rewrite_clj.zip.move.next;
/**
 * See [[move/end?]]
 */
rewrite_clj.zip.end_QMARK_ = rewrite_clj.zip.move.end_QMARK_;
/**
 * See [[move/rightmost?]]
 */
rewrite_clj.zip.rightmost_QMARK_ = rewrite_clj.zip.move.rightmost_QMARK_;
/**
 * See [[move/leftmost?]]
 */
rewrite_clj.zip.leftmost_QMARK_ = rewrite_clj.zip.move.leftmost_QMARK_;
/**
 * See [[move/prev]]
 */
rewrite_clj.zip.prev = rewrite_clj.zip.move.prev;
/**
 * See [[move/leftmost]]
 */
rewrite_clj.zip.leftmost = rewrite_clj.zip.move.leftmost;
/**
 * See [[move/rightmost]]
 */
rewrite_clj.zip.rightmost = rewrite_clj.zip.move.rightmost;
/**
 * See [[findz/find]]
 */
rewrite_clj.zip.find = rewrite_clj.zip.findz.find;
/**
 * See [[findz/find-last-by-pos]]
 */
rewrite_clj.zip.find_last_by_pos = rewrite_clj.zip.findz.find_last_by_pos;
/**
 * See [[findz/find-depth-first]]
 */
rewrite_clj.zip.find_depth_first = rewrite_clj.zip.findz.find_depth_first;
/**
 * See [[findz/find-next]]
 */
rewrite_clj.zip.find_next = rewrite_clj.zip.findz.find_next;
/**
 * See [[findz/find-next-depth-first]]
 */
rewrite_clj.zip.find_next_depth_first = rewrite_clj.zip.findz.find_next_depth_first;
/**
 * See [[findz/find-tag]]
 */
rewrite_clj.zip.find_tag = rewrite_clj.zip.findz.find_tag;
/**
 * See [[findz/find-next-tag]]
 */
rewrite_clj.zip.find_next_tag = rewrite_clj.zip.findz.find_next_tag;
/**
 * See [[findz/tag-by-pos]]
 */
rewrite_clj.zip.find_tag_by_pos = rewrite_clj.zip.findz.find_tag_by_pos;
/**
 * See [[findz/find-token]]
 */
rewrite_clj.zip.find_token = rewrite_clj.zip.findz.find_token;
/**
 * See [[findz/find-next-token]]
 */
rewrite_clj.zip.find_next_token = rewrite_clj.zip.findz.find_next_token;
/**
 * See [[findz/find-value]]
 */
rewrite_clj.zip.find_value = rewrite_clj.zip.findz.find_value;
/**
 * See [[findz/find-next-value]]
 */
rewrite_clj.zip.find_next_value = rewrite_clj.zip.findz.find_next_value;
/**
 * See [[editz/replace]]
 */
rewrite_clj.zip.replace = rewrite_clj.zip.editz.replace;
/**
 * See [[editz/edit]]
 */
rewrite_clj.zip.edit = rewrite_clj.zip.editz.edit;
/**
 * See [[editz/splice]]
 */
rewrite_clj.zip.splice = rewrite_clj.zip.editz.splice;
/**
 * See [[editz/prefix]]
 */
rewrite_clj.zip.prefix = rewrite_clj.zip.editz.prefix;
/**
 * See [[editz/suffix]]
 */
rewrite_clj.zip.suffix = rewrite_clj.zip.editz.suffix;
/**
 * See [[removez/remove]]
 */
rewrite_clj.zip.remove = rewrite_clj.zip.removez.remove;
/**
 * See [[removez/remove-preserve-newline]]
 */
rewrite_clj.zip.remove_preserve_newline = rewrite_clj.zip.removez.remove_preserve_newline;
/**
 * See [[insert/insert-right]]
 */
rewrite_clj.zip.insert_right = rewrite_clj.zip.insert.insert_right;
/**
 * See [[insert/insert-left]]
 */
rewrite_clj.zip.insert_left = rewrite_clj.zip.insert.insert_left;
/**
 * See [[insert/insert-child]]
 */
rewrite_clj.zip.insert_child = rewrite_clj.zip.insert.insert_child;
/**
 * See [[insert/append-child]]
 */
rewrite_clj.zip.append_child = rewrite_clj.zip.insert.append_child;
/**
 * See [[seqz/seq?]]
 */
rewrite_clj.zip.seq_QMARK_ = rewrite_clj.zip.seqz.seq_QMARK_;
/**
 * See [[seqz/list?]]
 */
rewrite_clj.zip.list_QMARK_ = rewrite_clj.zip.seqz.list_QMARK_;
/**
 * See [[seqz/vector?]]
 */
rewrite_clj.zip.vector_QMARK_ = rewrite_clj.zip.seqz.vector_QMARK_;
/**
 * See [[seqz/set?]]
 */
rewrite_clj.zip.set_QMARK_ = rewrite_clj.zip.seqz.set_QMARK_;
/**
 * See [[seqz/map?]]
 */
rewrite_clj.zip.map_QMARK_ = rewrite_clj.zip.seqz.map_QMARK_;
/**
 * See [[seqz/map-vals]]
 */
rewrite_clj.zip.map_vals = rewrite_clj.zip.seqz.map_vals;
/**
 * See [[seqz/map-keys]]
 */
rewrite_clj.zip.map_keys = rewrite_clj.zip.seqz.map_keys;
/**
 * See [[seqz/map]]
 */
rewrite_clj.zip.map = rewrite_clj.zip.seqz.map;
/**
 * See [[seqz/get]]
 */
rewrite_clj.zip.get = rewrite_clj.zip.seqz.get;
/**
 * See [[seqz/assoc]]
 */
rewrite_clj.zip.assoc = rewrite_clj.zip.seqz.assoc;

//# sourceMappingURL=rewrite_clj.zip.js.map
