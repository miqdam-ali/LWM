"use client";
import React, { useState, useEffect } from "react";
import { X, Edit3, Trash2, CheckCircle2, AlertCircle } from "lucide-react";
import {
  addInterest,
  DeleteInterest,
  UpdateInterest,
  fetchPosts,
} from "../Database/actions/action";

const Page = () => {
  const [tasks, setTasks] = useState([]);
  const [editboxopen, seteditboxopen] = useState(false);
  const [deletebox, setdeletebox] = useState(false);
  const [editInputVal, setEditInputVal] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [toast, setToast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [myTaskIds, setMyTaskIds] = useState([]);

  // Load Tasks & Local Ownership IDs
  const loadTasks = async () => {
    const res = await fetchPosts();
    if (res.success) setTasks(res.data);
  };

  useEffect(() => {
    const savedIds = JSON.parse(
      localStorage.getItem("my_interest_ids") || "[]",
    );
    setMyTaskIds(savedIds);
    loadTasks();
  }, []);

  const saveMyTaskId = (id) => {
    const updatedIds = [...myTaskIds, id];
    setMyTaskIds(updatedIds);
    localStorage.setItem("my_interest_ids", JSON.stringify(updatedIds));
  };

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 2000);
  };

  // 1. Add
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const res = await addInterest(formData);
    setIsLoading(false);

    if (res.success) {
      showToast("success", res.message);
      e.target.reset();
      if (res.data?.id) saveMyTaskId(res.data.id);
      loadTasks();
    } else {
      showToast("error", res.error);
    }
  };

  // 2. Update
  const handleUpdate = async () => {
    if (!editInputVal.trim()) return;
    setIsLoading(true);
    const formData = new FormData();
    formData.append("Interest", editInputVal);
    const res = await UpdateInterest(selectedId, formData);
    setIsLoading(false);

    if (res.success) {
      showToast("success", res.message);
      seteditboxopen(false);
      setSelectedId(null);
      setEditInputVal("");
      loadTasks();
    } else {
      showToast("error", res.error);
    }
  };

  // 3. Delete
  const confirmDelete = async () => {
    setIsLoading(true);
    const res = await DeleteInterest(selectedId);
    setIsLoading(false);

    if (res.success) {
      showToast("success", res.message);
      setdeletebox(false);

      const updatedIds = myTaskIds.filter((id) => id !== selectedId);
      setMyTaskIds(updatedIds);
      localStorage.setItem("my_interest_ids", JSON.stringify(updatedIds));

      setSelectedId(null);
      loadTasks();
    } else {
      showToast("error", res.error);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 relative">
      {/* Toast / Loading Popup */}
      {(isLoading || toast) && (
        <section className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
          <div className="relative z-10 bg-slate-900 border border-slate-800 px-8 py-6 rounded-2xl shadow-2xl flex flex-col items-center gap-4 min-w-[240px]">
            {isLoading && !toast ? (
              <>
                <div className="w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-slate-300 font-medium text-sm">
                  Processing...
                </p>
              </>
            ) : (
              <>
                {toast?.type === "success" ? (
                  <CheckCircle2 size={32} className="text-yellow-400" />
                ) : (
                  <AlertCircle size={32} className="text-red-400" />
                )}
                <p className="text-slate-200 font-semibold text-center text-sm tracking-wide">
                  {toast?.message}
                </p>
              </>
            )}
          </div>
        </section>
      )}

      {/* Header */}
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-yellow-500 uppercase tracking-wider">
          Drop Your Interest
        </h1>
      </div>

      {/* Form */}
      <div className="max-w-lg mx-auto">
        <form
          onSubmit={handleAddSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="text"
            name="Interest"
            placeholder="Enter Your Interest"
            required
            className="border border-slate-700 bg-transparent px-4 py-3 rounded-xl outline-none focus:border-yellow-500 w-full"
          />
          <button
            type="submit"
            className="bg-yellow-500 flex self-center text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-400 cursor-pointer whitespace-nowrap"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Task List Grid (4 Columns) */}
      <div className="mt-12">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        { tasks.length === 0 ? (
            // Agar tasks empty hon
            <div className="col-span-full flex flex-col items-center justify-center py-20 gap-3">
              <div className="w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-slate-400 text-sm font-medium tracking-wider">
                Loading interests...
              </p>
            </div>
          ) : (
            // Jab data load ho jaye toh real tasks render hon
            tasks.map((task) => {
              const isOwner = myTaskIds.includes(task.id);

              return (
                <div
                  key={task.id}
                  className="bg-slate-900/60 border border-yellow-500/40 p-5 rounded-2xl flex flex-col justify-between backdrop-blur-sm shadow-lg"
                >
                  <p className="text-slate-200 font-medium tracking-wide mb-6 break-words">
                    {task.Interest}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                    <span className="text-[10px] text-slate-500">
                      {isOwner ? "Your Interest" : "Public"}
                    </span>

                    {isOwner ? (
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setSelectedId(task.id);
                            setEditInputVal(task.Interest);
                            seteditboxopen(true);
                          }}
                          className="p-1.5 bg-slate-800 text-yellow-400 rounded-lg text-xs font-semibold hover:bg-yellow-500/20 cursor-pointer"
                        >
                          <Edit3 size={14} />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedId(task.id);
                            setdeletebox(true);
                          }}
                          className="p-1.5 bg-slate-800 text-red-400 rounded-lg text-xs font-semibold hover:bg-red-500/20 cursor-pointer"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ) : (
                      <span className="text-[10px] text-slate-600 italic">
                        Locked
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {editboxopen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-sm rounded-2xl p-6 relative">
            <button
              onClick={() => seteditboxopen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-bold text-yellow-500 text-center mb-4">
              Update Interest
            </h2>
            <input
              type="text"
              value={editInputVal}
              onChange={(e) => setEditInputVal(e.target.value)}
              className="bg-slate-950 border border-slate-700 px-4 py-3 rounded-xl w-full outline-none focus:border-yellow-500 mb-4"
            />
            <button
              onClick={handleUpdate}
              className="bg-yellow-500 text-black font-semibold py-3 rounded-xl w-full hover:bg-yellow-400 cursor-pointer"
            >
              Update
            </button>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deletebox && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-sm rounded-2xl p-6 text-center">
            <p className="text-slate-300 mb-6">
              Do you really want to delete this interest?
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={confirmDelete}
                className="bg-red-500/20 text-red-400 border border-red-500/30 px-5 py-2 rounded-xl font-semibold hover:bg-red-500/30 cursor-pointer"
              >
                Delete
              </button>
              <button
                onClick={() => setdeletebox(false)}
                className="bg-slate-800 text-slate-300 px-5 py-2 rounded-xl font-semibold hover:bg-slate-700 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
