"use server";
import { createClient } from "../../utils/supabase/server";

// 1. Add Interest
export async function addInterest(formData) {
  const supabase = await createClient();
  const interest = formData.get("Interest");

  if (!interest) {
    return { success: false, error: "Interest field is required." };
  }

  const { data, error } = await supabase
    .from("tasks")
    .insert([
      {
        Interest: interest,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Database Error:", error.message);
    return { success: false, error: "Failed to add interest to the database." };
  }

  return { success: true, message: "Interest Added Successfully", data };
}

// 2. Delete Interest
export async function DeleteInterest(id) {
  if (!id) {
    return { success: false, error: "Valid ID is required for deletion." };
  }
  const supabase = await createClient();
  const { error } = await supabase.from("tasks").delete().eq("id", id);
  if (error) {
    console.error("Delete Error:", error.message);
    return {
      success: false,
      error: "Could not delete the item. Please try again.",
    };
  }
  return { success: true, message: "Interest Deleted Successfully" };
}

// 3. Update Interest
export async function UpdateInterest(id, formData) {
  if (!id) {
    return { success: false, error: "Valid ID is required for updating." };
  }
  const supabase = await createClient();
  const NewInterest = formData.get("Interest");

  if (!NewInterest) {
    return { success: false, error: "New interest text is required." };
  }

  const { error } = await supabase
    .from("tasks")
    .update({ Interest: NewInterest })
    .eq("id", id);

  if (error) {
    console.error("Update Error:", error.message);
    return {
      success: false,
      error: "Could not update the item. Please try again.",
    };
  }

  return { success: true, message: "Updated Successfully" };
}

// 4. Fetch Data
export async function fetchPosts() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("tasks").select("*");

  if (error) {
    console.error("Error fetching data:", error.message);
    return { success: false, error: "Failed to load data from the database." };
  }

  return { success: true, message: "Data Fetched Successfully", data };
}
//Vote Section
export async function getSkillVotes(skillId) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("skill_votes")
    .select("votes")
    .eq("id", skillId)
    .single();

  if (error) return { success: true, votes: 0 }; // Agar row nahi mili toh 0 return karo
  return { success: true, votes: data?.votes || 0 };
}
// 2. Increment Vote
export async function incrementVote(skillId) {
  const supabase = await createClient();
  
  const { data: existing } = await supabase
    .from("skill_votes")
    .select("votes")
    .eq("id", skillId)
    .single();

  let newVotes = 1;
  if (existing) {
    newVotes = existing.votes + 1;
    await supabase
      .from("skill_votes")
      .update({ votes: newVotes })
      .eq("id", skillId);
  } else {
    await supabase
      .from("skill_votes")
      .insert([{ id: skillId, votes: 1 }]);
  }

  return { success: true, votes: newVotes };
}