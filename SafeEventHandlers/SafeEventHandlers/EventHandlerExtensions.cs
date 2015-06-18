using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public static class EventHandlerExtensions
{
    /// <summary>
    /// Raises an event thread-safely if the event has subscribers. 
    /// </summary>
    /// <param name="handler"> The event handler to raise. </param>
    /// <param name="sender"> The object that sent this event. </param>
    /// <param name="args"> The event args. </param>
    [SuppressMessage("Microsoft.Design",
        "CA1030:UseEventsWhereAppropriate",
        Justification = "This warning comes up when you use the word `Fire` in a method name. This method specifically raises events, and so does not need changing.")]
    public static void Fire(this EventHandler handler, object sender, EventArgs args)
    {
        if (handler != null)
        {
            handler(sender, args);
        }
    }

    /// <summary>
    /// Raises an event thread-safely if the event has subscribers. 
    /// </summary>
    /// <typeparam name="T"> The type of EventArgs the event takes. </typeparam>
    /// <param name="handler"> The event handler to raise. </param>
    /// <param name="sender"> The object that sent this event. </param>
    /// <param name="args"> The event args. </param>
    [SuppressMessage("Microsoft.Design",
        "CA1030:UseEventsWhereAppropriate",
        Justification = "This warning comes up when you use the word `Fire` in a method name. This method specifically raises events, and so does not need changing.")]
    public static void Fire<T>(this EventHandler<T> handler, object sender, T args) where T : EventArgs
    {
        if (handler != null)
        {
            handler(sender, args);
        }
    }
}
